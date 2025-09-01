const BASE_URL = "https://openlibrary.org/search.json";

// Fetch books by title with pagination and optional filters
export async function fetchBooks(query, page = 1, filters = {}) {
  let url = `${BASE_URL}?title=${encodeURIComponent(query)}&page=${page}`;

  // Add filters if provided
  if (filters.author) {
    url += `&author=${encodeURIComponent(filters.author)}`;
  }
  if (filters.subject) {
    url += `&subject=${encodeURIComponent(filters.subject)}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return await response.json();
}
