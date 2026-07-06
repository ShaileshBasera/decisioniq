import { Link } from "react-router-dom";

function DocumentTable({ documents, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-h-[320px]">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">
          Contract Repository
        </h2>
      </div>

      <table className="w-full">
        <thead className="bg-slate-50">
          <tr className="text-left text-sm text-slate-600">
            <th className="px-6 py-3">Document</th>
            <th className="px-6 py-3">Risk</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {documents.length === 0 ? (
            <tr>
              <td
                colSpan="3"
                className="px-6 py-16 text-center text-slate-500"
              >
                No contracts uploaded.
              </td>
            </tr>
          ) : (
            documents.map((doc) => (
              <tr
                key={doc.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  <p className="font-medium">
                    {doc.filename}
                  </p>

                  <p className="text-sm text-slate-500 line-clamp-2">
                    {doc.summary}
                  </p>
                </td>

                <td className="px-6 py-4">
                  {doc.risks.length > 0 ? (
                    <span className="text-red-600 font-medium">
                      High Risk
                    </span>
                  ) : (
                    <span className="text-green-600 font-medium">
                      Low Risk
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 space-x-4">
                  <Link
                    to={`/documents/${doc.id}`}
                    className="text-indigo-600 hover:underline"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => onDelete(doc.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DocumentTable;