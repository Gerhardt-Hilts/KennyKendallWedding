import React from 'react';
import AppJumbotron from '../AppJumbotron/AppJumbotron';

import styles from './AppHeader.module.scss';

export default class AppHeader extends React.Component {
  render() {
    return(
      <div className={styles.container}>
        <AppJumbotron/>
        <div className={styles.titleContainer}>
          <div className={styles.titleCard}>
            <div className={styles.textContainer}>
              <div>Congratulations<span className={styles.space}/></div><div>Kenny and Kendall</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
