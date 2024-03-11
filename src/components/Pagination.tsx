import React, { useState } from 'react';

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="pagination_buttons">
      <button onClick={() => handleClick(1)} className="pagination_button">
        1
      </button>
      <button onClick={() => handleClick(2)} className="pagination_button">
        2
      </button>
      <button onClick={() => handleClick(3)} className="pagination_button">
        3
      </button>
    </div>
  );
};

export default Pagination;
