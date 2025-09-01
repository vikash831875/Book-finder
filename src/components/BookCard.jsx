function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition bg-white">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-60 object-cover mb-3 rounded "
      />
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-600">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      <p className="text-sm text-gray-500">
        First published: {book.first_publish_year || "N/A"}
      </p>
    </div>
  );
}

export default BookCard;
