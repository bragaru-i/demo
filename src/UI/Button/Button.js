import React from 'react';

import styles from './Button.module.scss';

const Button = ({ children, btnStyle = 'cta', btnType = 'primary' }) => {
  let button = [styles.primary, styles.cta];
  //   added only default styling
  return <button className={button.join(' ')}>{children}</button>;
};

export default Button;
