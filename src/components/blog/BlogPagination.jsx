import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const BlogPagination = ({ currentPage, setCurrentPage }) => {
  const totalPages = 2;

  return (
    <div className="blog-pagination">
      <button
        className="pagination-nav"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <FaArrowLeft />
        <span>Prev</span>
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`pagination-number ${
            currentPage === index + 1 ? "active" : ""
          }`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="pagination-nav"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <span>Next</span>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default BlogPagination;