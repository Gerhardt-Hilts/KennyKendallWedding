import React from 'react';

import DefaultImage from '../../assets/img/banner.jpg';

import styles from './AppHeader.module.scss';

export default class AppHeader extends React.Component {
  render() {
    return(
      <div className={styles.container}>
        <img src={DefaultImage} alt={'banner'} className={styles.image}/>
        <div className={styles.titleCard}>
          <div className={styles.textContainer}>
            <div>Congratulations<span className={styles.space}> </span></div><div>Kenny and Kendall</div>
          </div>
        </div>
      </div>
    );
  }
}
