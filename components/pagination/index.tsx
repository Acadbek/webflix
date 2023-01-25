const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);

  return (
    <>
      <div>
        <ul>
          {pages.map((page) => (
            <li
              key={page}
              className={page === currentPage ? "bg-red-600" : "bg-blue-600"}
            >
              <a
                className="text-emerald-600"
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
