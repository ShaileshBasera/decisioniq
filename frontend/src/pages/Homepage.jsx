import Header from "../components/Header";
import UploadCard from "../components/UploadCard";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <UploadCard />
      </main>
    </div>
  );
}

export default HomePage;