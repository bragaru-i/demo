import React from 'react';

import dumbCards from './dumbCards';
import Cards from './components/Cards/Cards';

import styles from './MainPage.module.scss';
import Button from '../UI/Button/Button';
import Pagination from './components/Pagination/Pagination';

const MainPage = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.HeadlineBox}>
        <h1>Headline organizations</h1>
        <div className={styles.HeadlineInfo}>
          <div className={styles.details}>
            But I must explain to you how all this mistaken idea of denouncing pleasure
            and praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings of the great explorer of the truth,
            the master-builder of human happiness.
          </div>
          <div className={styles.CTA}>
            <Button>Add Organization</Button>
          </div>
        </div>
      </div>
      <Cards dumbCards={dumbCards} />
      <Pagination />
    </div>
  );
};

export default MainPage;
