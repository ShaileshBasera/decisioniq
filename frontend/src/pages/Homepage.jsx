import { useEffect, useState } from "react";

import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import SearchBar from "../components/SearchBar";
import DocumentTable from "../components/DocumentTable";
import RepositoryCard from "../components/RepositoryCard";
import UploadCard from "../components/UploadCard";

import {
  getDocuments,
  deleteDocument,
} from "../services/documentService";

function HomePage() {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadDocuments();
  }, []);

  async function loadDocuments() {
    try {
      const data = await getDocuments();
      setDocuments(data);
    } catch (error) {
      console.error("Failed to load documents:", error);
    }
  }

  async function handleDelete(documentId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmed) return;

    try {
      await deleteDocument(documentId);

      setDocuments((prevDocuments) =>
        prevDocuments.filter((doc) => doc.id !== documentId)
      );
    } catch (error) {
      console.error("Failed to delete document:", error);
      alert("Failed to delete document.");
    }
  }

  const filteredDocuments = documents.filter((doc) => {
    const search = searchTerm.toLowerCase();

    return (
      doc.filename.toLowerCase().includes(search) ||
      doc.summary.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Repository Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Manage contracts, analyze risks and interact with AI across your
            repository.
          </p>
        </section>

        <section className="mb-8">
          <StatsCards documents={documents} />
        </section>

        <section className="mb-8">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2">
            <DocumentTable
              documents={filteredDocuments}
              onDelete={handleDelete}
            />
          </div>

          <RepositoryCard />
        </section>

        <section>
          <UploadCard />
        </section>
      </main>
    </div>
  );
}

export default HomePage;