function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
      <input
        type="text"
        placeholder="Search contracts by filename or summary..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

export default SearchBar;