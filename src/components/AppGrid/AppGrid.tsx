import React from 'react';
import styles from './AppGrid.module.scss';

export default class AppGrid extends React.Component {
  render() {
    return(
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}