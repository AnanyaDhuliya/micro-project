import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        Explainable AI for Diabetic Retinopathy Screening
      </h1>
      <p className="text-gray-700 mb-6">
        Diabetic retinopathy is an eye condition caused by diabetes that can
        lead to vision loss if not detected early. Our system helps healthcare
        workers screen retinal photographs, especially in rural areas where
        eye specialists are limited.
      </p>

      <h2 className="text-xl font-semibold mb-2">How it works</h2>
      <ol className="list-decimal ml-6 space-y-1 text-gray-700 mb-8">
        <li>Upload a retinal photograph.</li>
        <li>The AI predicts the severity category.</li>
        <li>A heatmap shows which regions influenced the prediction.</li>
        <li>Follow the referral guidance shown with the result.</li>
      </ol>

      <Link
        to="/screening"
        className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800"
      >
        Start Screening
      </Link>
    </div>
  );
}

export default Home;