function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-40 text-black-700">
      <p className="text-lg">{message || "No results found."}</p>
    </div>
  );
}

export default EmptyState;
