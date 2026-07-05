import { useState } from "react";
import api from "../services/api";

function UploadCard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setMessage("");
    setText("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Please select a PDF first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await api.post("/upload", formData);

      setMessage(response.data.message);
      setText(response.data.text);
    } catch (error) {
      console.error(error);
      setMessage("Upload failed.");
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
        className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Upload Document
      </button>

      {message && (
        <div className="mt-6 text-green-700 font-semibold">
          {message}
        </div>
      )}

      {text && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">
            Extracted Text
          </h3>

          <div className="bg-gray-100 rounded-lg p-4 max-h-96 overflow-y-auto whitespace-pre-wrap text-sm">
            {text}
          </div>
        </div>
      )}

    </div>
  );
}

export default UploadCard;