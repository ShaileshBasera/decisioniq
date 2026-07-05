import Header from "../components/Header";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold">
            Welcome to DecisionIQ
          </h2>

          <p className="mt-4 text-gray-600">
            Sprint 2 is underway. Next, we'll build the document upload feature.
          </p>
        </div>
      </main>
    </div>
  );
}

export default HomePage;