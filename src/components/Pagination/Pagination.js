import React from 'react';
import styles from './styles.module.css'

const Pagination = ({pagination, pages, currentPage }) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {pages.map((page) => {
                    return <li className={page === currentPage ? styles.active : styles.normal}>
                        <p onClick={()=> pagination(page)} className={styles.pagep}>{page}</p>
                        </li>;
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
