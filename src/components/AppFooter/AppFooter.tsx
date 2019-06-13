import React from 'react';
import styles from './AppFooter.module.scss';

export default class AppFooter extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.copyrightText}>© 2019 Init Industries, LLC.</div>
      </div>
    );
  }
}