import BookCard from "./BookCard";

function BookGrid({ books }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full max-w-7xl mx-auto">
      {books.map((book) => (
        <BookCard key={`${book.key}-${book.cover_i}`} book={book} />
      ))}
    </div>
  );
}

export default BookGrid;
