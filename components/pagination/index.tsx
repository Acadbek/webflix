function Pagination({ totalItems = 263, currentPage, pageSize, onPageChange }) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center">
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-l-md"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`${
              currentPage === page
                ? "bg-gray-700 text-white"
                : "bg-white text-gray-700"
            } px-4 py-2`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-r-md"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
