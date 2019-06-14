import React from 'react';
import styles from './AppMediaContainer.module.scss';

export default class AppMediaContainer extends React.Component {
  constructor() {
    super({});
    this.state = {
      date: new Date(),
      imageSource: ''
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.textGroup}>
          <div className={styles.mainText}>1943-10-28</div>
          <div className={styles.hintText}>Date Uploaded</div>
        </div>
      </div>
    );
  }
}
