import React from 'react';

import styles from './Card.module.scss';

const Card = ({ image, header, detail, stat1, stat2, stat3 }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardImage}>
        <img src={image} alt={header} />
      </div>
      <div className={styles.CardHeader}>{header}</div>
      <div className={styles.CardDetail}>{detail}</div>
      <div className={styles.CardStatistics}>
        <div className={styles.CardStatisticsStat}>
          {stat1}
          <p>Projects</p>
        </div>
        <div className={styles.CardStatisticsStat}>
          {stat2}
          <p>Data agents</p>
        </div>
        <div className={styles.CardStatisticsStat}>
          {stat3} <p>Beneficiares</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
