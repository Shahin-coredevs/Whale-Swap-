/* eslint-disable react/prop-types */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-end items-end">
      <div className="flex gap-4 mt-5">
        {[...Array(totalPages)].map((e, i) => (
          <button
            key={i}
            className={`${
              i + 1 === currentPage ? "bg-primary" : "bg-[#1A202C]"
            } rounded-xl w-12 h-10 flex border border-slate-800 justify-center items-center`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
