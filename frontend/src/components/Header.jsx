import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-indigo-600">
            DecisionIQ
          </h1>

          <p className="text-sm text-gray-500">
            AI-Powered Contract Intelligence
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/assistant"
            className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Repository AI
          </Link>

          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
            Upload Document
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;