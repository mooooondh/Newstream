interface props {
  currentPage: number;
  totalDataLength: number;
}

export const Pagination = ({ currentPage, totalDataLength }: props) => {
  const totalPages = Array.from(
    { length: Math.ceil(totalDataLength / 10) },
    (_, i) => i + 1
  );

  const renderPagination = () => {
    if (totalPages.length <= 10) {
      return (
        <>
          {totalPages.map((pageNum, idx) => (
            <button key={idx}>
              <p>{pageNum}</p>
            </button>
          ))}
        </>
      );
    } else {
      if (currentPage <= 5) {
        const viewPages = totalPages.slice(0, 9);
        return (
          <>
            <>
              {viewPages.map((pageNum, idx) => (
                <button key={idx}>
                  <p>{pageNum}</p>
                </button>
              ))}
            </>
            <p>...</p>
            <button>
              <p>{totalPages[totalPages.length - 1]}</p>
            </button>
          </>
        );
      } else if (currentPage + 5 > totalPages[totalPages.length - 1]) {
        const endPageNum = totalPages[totalPages.length - 1];

        const viewPages = totalPages.slice(currentPage - 5, endPageNum);
        return (
          <>
            <p>...</p>
            <>
              {viewPages.map((pageNum, idx) => (
                <button key={idx}>
                  <p>{pageNum}</p>
                </button>
              ))}
            </>
          </>
        );
      } else {
        const viewPages = totalPages.slice(currentPage - 5, currentPage + 5);
        return (
          <>
            <p>...</p>
            <>
              {viewPages.map((pageNum, idx) => (
                <button key={idx}>
                  <p>{pageNum}</p>
                </button>
              ))}
            </>
            <p>...</p>
            <button>
              <p>{totalPages[totalPages.length - 1]}</p>
            </button>
          </>
        );
      }
    }
  };

  return <div data-testid="pagination">{renderPagination()}</div>;
};
