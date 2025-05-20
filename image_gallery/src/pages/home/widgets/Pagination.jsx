import React from "react";
import "./Pagination.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <span
        className="arrow"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        &lt;
      </span>
      {pageNumbers.map((number) => (
        <span
          key={number}
          className={`page-number ${currentPage === number ? "active" : ""}`}
          onClick={() =>{}} // onPageChange(number)
        >
          {number}
        </span>
      ))}
      <span
        className="arrow"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      >
        &gt;
      </span>
    </div>
  );
}
