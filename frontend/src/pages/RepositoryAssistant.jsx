import { useState } from "react";

function RepositoryAssistant() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askRepository = async () => {

    if (!question.trim()) return;

    setLoading(true);

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/repository/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
          }),
        }
      );

      const data = await response.json();

      setAnswer(data.answer);

    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-5xl mx-auto p-8">

        <div className="bg-white rounded-xl shadow p-8">

          <h1 className="text-3xl font-bold mb-2">
            🤖 Repository AI Assistant
          </h1>

          <p className="text-gray-500 mb-6">
            Ask questions across all uploaded contracts.
          </p>

          <textarea
            rows={4}
            className="w-full border rounded-lg p-3"
            placeholder="Example: Which contracts expire this year?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button
            onClick={askRepository}
            disabled={loading}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>

          {answer && (
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h2 className="font-semibold mb-2">
                AI Response
              </h2>

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

export default RepositoryAssistant;