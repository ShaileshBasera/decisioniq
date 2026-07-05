import { useState } from "react";
import api from "../services/api";

function UploadCard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [summary, setSummary] = useState("");
  const [metadata, setMetadata] = useState(null);
  const [risks, setRisks] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setMessage("");
    setSummary("");
    setMetadata(null);
    setRisks([]);
    setRecommendations([]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Please select a PDF first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);

      const response = await api.post("/upload", formData);

      setMessage(response.data.message);

      setSummary(response.data.summary);
      setMetadata(response.data.metadata);
      setRisks(response.data.risks);
      setRecommendations(response.data.recommendations);

    } catch (error) {
      console.error(error);
      setMessage("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">

      <h2 className="text-2xl font-bold">
        Upload Contract
      </h2>

      <p className="mt-2 text-gray-600">
        Upload a PDF contract to begin AI-powered analysis.
      </p>

      <label className="mt-8 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-xl p-12 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">

        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
          disabled={loading}
        />

        <div className="text-6xl">📄</div>

        <p className="mt-4 text-lg font-medium">
          Click to select a PDF
        </p>

        <p className="text-sm text-gray-500">
          Supported format: PDF
        </p>

      </label>

      {selectedFile && (
        <div className="mt-6 rounded-lg bg-green-50 border border-green-200 p-4">
          <p className="font-medium text-green-700">
            Selected File
          </p>

          <p className="text-sm mt-1">
            {selectedFile.name}
          </p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`mt-8 w-full py-3 rounded-lg text-white font-medium transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Analyzing Contract..." : "Upload Document"}
      </button>

      {loading && (
        <div className="mt-4 rounded-lg bg-blue-50 border border-blue-200 p-4 text-blue-700 animate-pulse">
          🤖 Extracting text and analyzing your contract with Gemini...
        </div>
      )}

      {message && (
        <div className="mt-6 text-green-700 font-semibold">
          {message}
        </div>
      )}

      {summary && (
        <div className="mt-8 bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-3">
            Executive Summary
          </h3>

          <p>{summary}</p>
        </div>
      )}

      {metadata && (
        <div className="mt-6 bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-3">
            Metadata
          </h3>

          <p><strong>Parties:</strong> {metadata.parties}</p>
          <p><strong>Effective Date:</strong> {metadata.effective_date}</p>
          <p><strong>Expiry Date:</strong> {metadata.expiry_date}</p>
          <p><strong>Payment Terms:</strong> {metadata.payment_terms}</p>
        </div>
      )}

      {risks.length > 0 && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3">
            Risks
          </h3>

          <ul className="list-disc ml-5">
            {risks.map((risk, index) => (
              <li key={index}>{risk}</li>
            ))}
          </ul>
        </div>
      )}

      {recommendations.length > 0 && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3">
            Recommendations
          </h3>

          <ul className="list-disc ml-5">
            {recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default UploadCard;