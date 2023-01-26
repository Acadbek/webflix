function Pagination({ totalItems = 263, currentPage, pageSize, onPageChange }) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li
          className={`${
            currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <div className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </li>
        {pages.map((item) => (
          <li key={item} onClick={() => onPageChange(item)}>
            <div
              className={`${
                currentPage === item
                  ? "bg-gray-500 px-3 py-2 leading-tight text-gray-200 cursor-pointer"
                  : "bg-white text-gray-700 px-3 py-2 leading-tight cursor-pointer"
              }`}
            >
              {item}
            </div>
          </li>
        ))}

        <li
          className={`${
            currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <div className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
