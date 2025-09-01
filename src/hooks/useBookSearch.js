import { useEffect, useState } from "react";
import { fetchBooks } from "../services/openLibrary";

export default function useBookSearch(query, page, filters) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!query) {
      setBooks([]);
      setTotal(0);
      return;
    }

    setLoading(true);
    setError(null);

    fetchBooks(query, page, filters)
      .then((data) => {
        setBooks(data.docs || []);
        setTotal(data.numFound || 0);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query, page, filters]);

  return { books, loading, error, total };
}
