import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row w-full gap-4"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search books by title..."
        className="flex-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition w-full md:w-auto"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
