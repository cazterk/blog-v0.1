import React from "react";
import Link from "next/link";
import styles from "../styles/pagination.module.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pageItem}>
            {" "}
            <Link href={`#!`} onClick={(number) => paginate(number)}>
              <a className={styles.pageLink}>{number}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
