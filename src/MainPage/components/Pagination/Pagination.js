import React from 'react';

import Icon from '../../../icons/Icons';
import styles from './Pagination.module.scss';
const Pagination = () => {
  return (
    <div className={styles.Pagination}>
      <span className={styles.PaginationBoxIcon}>
        <Icon name="prev" width="2rem" />
      </span>
      <span className={styles.PaginationBoxActive}>1</span>
      <span className={styles.PaginationBox}>2</span>
      <span className={styles.PaginationBox}>3</span>
      <span className={styles.PaginationBox}>4</span>
      <span className={styles.PaginationBox}>5</span>
      <span className={styles.PaginationBoxIcon}>
        <Icon name="next" width="2rem" />
      </span>
    </div>
  );
};

export default Pagination;
