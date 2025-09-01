import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import BookGrid from "./components/BookGrid";
import Pagination from "./components/Pagination";
import Loading from "./components/Loading";
import EmptyState from "./components/EmptyState";
import useBookSearch from "./hooks/useBookSearch";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("relevance");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    setPage(1);
  }, [query, year, language, sort]);

  const { books, loading, totalPages } = useBookSearch(
    query,
    page,
    sort,
    year,
    language
  );

  return (
    <div
      className="min-h-screen w-full flex flex-col text-gray-900 relative"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Stronger overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Header */}
        <header className="bg-indigo-200 bg-opacity-90 text-white py-6 shadow-md w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center drop-shadow-lg">
            📚 Book Finder
          </h1>
        </header>

        {/* Search + Filters Section */}
        <section className="w-full py-12 px-4 flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-100 text-center drop-shadow-lg">
            Discover Your Favorite Books
          </h2>

          {/* Search Bar with glass effect */}
          <div className="w-full max-w-3xl bg-white/60 backdrop-blur-md rounded-lg p-4 shadow-lg">
            <SearchBar onSearch={setQuery} />
          </div>

          {/* Filters with glass effect */}
          <div className="w-full max-w-3xl bg-white/60 backdrop-blur-md rounded-lg p-4 shadow-lg mt-4">
            <Filters
              sort={sort} setSort={setSort}
              year={year} setYear={setYear}
              language={language} setLanguage={setLanguage}
            />
          </div>
        </section>

        {/* Books / Loader / Empty */}
<main className="flex-1 w-full px-4 md:px-12 py-8 flex flex-col items-center">

  {/* Loading state */}
  {loading ? (
    <div className="flex justify-center items-center h-64 w-full">
      <Loading />
    </div>

  /* Empty state when no books found */
  ) : books.length === 0 && query ? (
    <div className="w-full flex justify-center items-center py-20">
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 max-w-2xl">
        <EmptyState
          message="Oops! No books found. Try a different search."
          className="text-center text-white text-2xl font-semibold drop-shadow-lg"
        />
      </div>
    </div>

  /* Display books */
  ) : (
    <BookGrid books={books} />
  )}

  {/* Pagination */}
  {!loading && totalPages > 1 && (
    <div className="mt-8 flex justify-center w-full gap-4">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
      >
        Prev
      </button>
      <span className="text-lg font-medium text-white drop-shadow-lg">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  )}
</main>

      </div>
    </div>
  );
}

export default App;
