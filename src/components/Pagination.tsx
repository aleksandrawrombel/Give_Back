import React, { useState } from 'react';

export interface Props {
  totalPages: number;
}

const Pagination: React.FC<Props> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="pagination_buttons">
      <button onClick={() => handleClick(1)} type="button" className="pagination_button">
        1
      </button>
      <button onClick={() => handleClick(2)} type="button" className="pagination_button">
        2
      </button>
      <button onClick={() => handleClick(3)} type="button" className="pagination_button">
        3
      </button>
    </div>
  );
};

export default Pagination;
