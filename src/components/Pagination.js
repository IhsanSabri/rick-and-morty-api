import React from "react";

const Pagination = ({ nextPage, prevPage }) => {

  return (
    <nav>
      <ul className="mb-5 mt-5 justify-center flex items-center space-x-1">
        {
          <button
            className={
              prevPage === null
                ? "cursor-not-allowed px-4 py-2 text-white bg-blue-300 rounded focus:outline-none"
                : "cursor-pointer px-4 py-2 bg-gray-200 rounded-md text-white bg-blue-400"
            }
            onClick={prevPage}
          >
            Previous
          </button>
        }
        {
          <button
            className={
              nextPage === null
                ? "cursor-not-allowed px-4 py-2 text-white bg-blue-300 rounded focus:outline-none"
                : "cursor-pointer px-4 py-2 bg-gray-200 rounded-md text-white bg-blue-400"
            }
            onClick={nextPage}
          >
            Next
          </button>
        }
      </ul>
    </nav>
  );
};

export default Pagination;
