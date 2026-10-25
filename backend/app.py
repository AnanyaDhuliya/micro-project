from flask import Flask, jsonify, request
from flask_cors import CORS
from PIL import Image

app = Flask(__name__)
CORS(app)

# Reject any upload larger than 5 MB
app.config["MAX_CONTENT_LENGTH"] = 5 * 1024 * 1024

ALLOWED_EXTENSIONS = {"jpg", "jpeg", "png"}


@app.route("/api/health")
def health():
    return jsonify({"status": "ok", "message": "Backend is running"})


@app.route("/api/analyze", methods=["POST"])
def analyze():
    # 1. Was a file sent?
    if "image" not in request.files:
        return jsonify({"error": "No image was uploaded."}), 400

    file = request.files["image"]
    if file.filename == "":
        return jsonify({"error": "No file was selected."}), 400

    # 2. Is the extension allowed?
    extension = file.filename.rsplit(".", 1)[-1].lower()
    if extension not in ALLOWED_EXTENSIONS:
        return jsonify({"error": "Only JPG and PNG images are allowed."}), 400

    # 3. Is it a real, readable image?
    try:
        Image.open(file.stream).verify()
        file.stream.seek(0)
        image = Image.open(file.stream)
        width, height = image.size
    except Exception:
        return jsonify({"error": "The file is not a valid image."}), 400

    # 4. Is it big enough to be a useful retinal photo?
    if width < 200 or height < 200:
        return jsonify({"error": "Image is too small. Use at least 200 x 200 pixels."}), 400

    return jsonify({
        "status": "ok",
        "message": "Image received. Model analysis will be added in Phase 5.",
        "width": width,
        "height": height,
    })


@app.errorhandler(413)
def file_too_large(error):
    return jsonify({"error": "File is too large. Maximum size is 5 MB."}), 413


if __name__ == "__main__":
    app.run(debug=True, port=5000)