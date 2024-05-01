import PropTypes from "prop-types";
import { useMemo } from "react";

const TablePagination = ({
  skip,
  setSkip,
  take,
  pages,
  finalPage,
}) => {
  const prevPage = () => {
    if (skip === 0) {
      return null;
    }

    setSkip((prev) => prev - take);
  };
  const nextPage = () => {
    if (skip === finalPage) {
      return null;
    }

    setSkip((prev) => prev + take);
  };

  const memoizedButtonBg = useMemo(() => {
    return (page) =>
      page === skip ? "bg-purple-500 text-white" : "bg-tranparent-500";
  }, [skip]);

  const memoizedPagination = useMemo(()=>{
    return pages.length > 0
      ? "flex  "
      : "hidden";
  },[pages])

  console.log(pages.length,memoizedPagination);
  return (
    <div className="h-60px w-full bg-slate-800 grid grid-cols">
      
      <div className={`${memoizedPagination} flex-row items-center justify-end  p-2.5  gap-2`}>
        <button
          className="px-1 border text-purple-500 border-purple-500"
          onClick={prevPage}
        >
          prev
        </button>
        {pages.map((page, idx) => {
          return (
            <button
              key={idx}
              className={`${memoizedButtonBg(
                page
              )} text-purple-500 px-1 border border-purple-500`}
              onClick={() => setSkip(page)}
            >
              {idx + 1}
            </button>
          );
        })}
        <button
          className="px-1 text-purple-500 border border-purple-500"
          onClick={nextPage}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
TablePagination.propTypes = {
  skip: PropTypes.number,
  setSkip: PropTypes.func,
  take: PropTypes.number,
  pages: PropTypes.array,
  finalPage: PropTypes.number,
};
