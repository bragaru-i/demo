import React from 'react';

import styles from './Cards.module.scss';

import Card from './Card/Card';
const Cards = ({ dumbCards }) => {
  return (
    <div className={styles.CardsContainer}>
      {dumbCards.map((el) => (
        <Card
          key={el.id}
          image={el.image}
          header={el.header}
          detail={el.detail}
          stat1={el.stat1}
          stat2={el.stat2}
          stat3={el.stat3}
        />
      ))}
    </div>
  );
};

export default Cards;
