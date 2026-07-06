import { Link } from "react-router-dom";

function RepositoryCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-full">
      <h2 className="text-xl font-semibold">
        Repository AI Assistant
      </h2>

      <p className="text-gray-500 mt-3">
        Ask questions across all uploaded contracts.
      </p>

      <div className="mt-6 space-y-3">
        <div className="rounded-lg bg-gray-100 p-3">
          Which contracts expire this month?
        </div>

        <div className="rounded-lg bg-gray-100 p-3">
          Show high-risk agreements.
        </div>

        <div className="rounded-lg bg-gray-100 p-3">
          Compare payment terms.
        </div>
      </div>

      <Link
        to="/assistant"
        className="mt-8 inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700"
      >
        Open AI Assistant
      </Link>
    </div>
  );
}

export default RepositoryCard;