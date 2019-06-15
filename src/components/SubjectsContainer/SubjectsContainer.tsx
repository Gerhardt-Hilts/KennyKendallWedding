// Libraries
import React from 'react';

// Styles
import styles from './SubjectsContainer.module.scss';


export default class SubjectsContainer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}