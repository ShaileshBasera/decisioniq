import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DocumentDetails from "./pages/DocumentDetails";
import RepositoryAssistant from "./pages/RepositoryAssistant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/documents/:id" element={<DocumentDetails />} />
      <Route path="/assistant" element={<RepositoryAssistant />} />
    </Routes>
  );
}

export default App;