import { useState, useRef } from "react";

const MAX_SIZE_MB = 5;
const ALLOWED_TYPES = ["image/jpeg", "image/png"];

function Screening() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  function handleFile(selected) {
    setError("");
    setResult(null);
    if (!selected) return;

    if (!ALLOWED_TYPES.includes(selected.type)) {
      setError("Only JPG and PNG images are allowed.");
      return;
    }
    if (selected.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`File is too large. Maximum size is ${MAX_SIZE_MB} MB.`);
      return;
    }

    if (preview) URL.revokeObjectURL(preview);
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  }

  async function handleAnalyze() {
    if (!file) return;
    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Could not reach the server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(null);
    setError("");
    setResult(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-blue-800 mb-2">
        Screening / Image Upload
      </h1>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
        <li>Use a clear, well-lit retinal (fundus) photograph.</li>
        <li>Accepted formats: JPG or PNG, up to {MAX_SIZE_MB} MB.</li>
        <li>Avoid blurry, dark, or cropped images.</li>
      </ul>

      {/* Drag and drop area */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
        className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition ${
          dragging ? "border-blue-600 bg-blue-50" : "border-gray-400"
        }`}
      >
        <p className="text-gray-700">
          Drag and drop a retinal image here, or click to choose a file
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {/* Preview */}
      {preview && (
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Preview</h2>
          <img
            src={preview}
            alt="Retinal preview"
            className="max-h-80 rounded border mx-auto"
          />
          <p className="text-sm text-gray-600 text-center mt-1">
            {file.name} ({(file.size / 1024).toFixed(0)} KB)
          </p>

          <div className="flex gap-3 justify-center mt-4">
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze Image"}
            </button>
            <button
              onClick={handleReset}
              disabled={loading}
              className="border px-6 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            >
              Remove
            </button>
          </div>
        </div>
      )}

      {/* Loading indicator */}
      {loading && (
        <div className="mt-6 flex items-center justify-center gap-3 text-blue-700">
          <div className="h-6 w-6 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>
          <span>Processing image...</span>
        </div>
      )}

      {/* Server response (temporary, will become the Results page) */}
      {result && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
          <p>{result.message}</p>
          <p className="text-sm mt-1">
            Image size: {result.width} x {result.height} pixels
          </p>
        </div>
      )}
    </div>
  );
}

export default Screening;