function Filters({ sort, setSort, year, setYear, language, setLanguage }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="flex-1 md:flex-none md:w-40 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
      </select>

      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value ? Number(e.target.value) : "")} // convert to number
        className="flex-1 md:flex-none md:w-32 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="flex-1 md:flex-none md:w-40 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Languages</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}

export default Filters;
