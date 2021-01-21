import React, { useState } from "react";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  totalPages: number;
  activePage: number;
  setActivePage: (page: number) => void;
}

function Pagination({
  totalPages,
  activePage,
  setActivePage,
}: PaginationProps) {
  const pages: JSX.Element [] = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li
        onClick={() => setActivePage(i)}
        className={`${styles.pagination__item} ${
          i === activePage && styles.active
        }`}
      >
        {i}
      </li>
    );
  }

  return <ul className={styles.pagination}>{pages}</ul>;
}

export default Pagination;
