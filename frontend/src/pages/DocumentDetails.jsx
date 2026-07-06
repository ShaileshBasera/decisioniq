import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function DocumentDetails() {
  const { id } = useParams();

  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [asking, setAsking] = useState(false);

  useEffect(() => {
    async function loadDocument() {
      try {
        const response = await api.get(`/documents/${id}`);
        setDocument(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDocument();
  }, [id]);

  const askAI = async () => {
    if (!question.trim()) return;

    setAsking(true);

    try {
      const response = await api.post(
        `/documents/${id}/chat`,
        {
          question,
        }
      );

      setAnswer(response.data.answer);
    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong.");
    }

    setAsking(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  if (!document || document.error) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-600">
        Document not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 space-y-6">

        {/* Header */}

        <div className="bg-white rounded-xl shadow p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {document.filename}
          </h1>

          <p className="text-gray-500 mt-2">
            Contract ID: {document.id}
          </p>
        </div>

        {/* Executive Summary */}

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            📄 Executive Summary
          </h2>

          <p className="text-gray-700 leading-7">
            {document.summary}
          </p>
        </div>

        {/* Metadata */}

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-6">
            📋 Contract Metadata
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {Object.entries(document.metadata || {}).map(([key, value]) => (
              <div
                key={key}
                className="border rounded-lg p-4 bg-gray-50"
              >
                <p className="text-sm text-gray-500 capitalize">
                  {key.replaceAll("_", " ")}
                </p>

                <p className="font-semibold mt-1">
                  {Array.isArray(value)
                    ? value.join(", ")
                    : String(value)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Risks */}

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-6">
            ⚠️ Risks
          </h2>

          {(document.risks || []).length === 0 ? (
            <p>No risks detected.</p>
          ) : (
            <div className="space-y-3">
              {document.risks.map((risk, index) => (
                <div
                  key={index}
                  className="border-l-4 border-red-500 bg-red-50 p-4 rounded"
                >
                  {typeof risk === "string"
                    ? risk
                    : JSON.stringify(risk)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recommendations */}

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-6">
            💡 AI Recommendations
          </h2>

          {(document.recommendations || []).length === 0 ? (
            <p>No recommendations.</p>
          ) : (
            <div className="space-y-3">
              {document.recommendations.map((item, index) => (
                <div
                  key={index}
                  className="border-l-4 border-green-500 bg-green-50 p-4 rounded"
                >
                  {typeof item === "string"
                    ? item
                    : JSON.stringify(item)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* AI Chat */}

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            🤖 Ask AI About This Contract
          </h2>

          <textarea
            rows={3}
            className="w-full border rounded-lg p-3"
            placeholder="Ask anything about this contract..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button
            onClick={askAI}
            disabled={asking}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            {asking ? "Thinking..." : "Ask AI"}
          </button>

          {answer && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                AI Response
              </h3>

              <p className="whitespace-pre-wrap">
                {answer}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default DocumentDetails;