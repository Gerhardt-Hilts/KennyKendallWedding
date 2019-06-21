// Libraries
import React from 'react';

// Styles
import styles from './AppModal.module.scss';


interface State {
  show: false
}

export default class AppModal extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    if (!this.state.show) {
      return null;
    }

    return (
      <div className={styles.container}>
        <div className={styles.card}>
          {this.props.children}
        </div>
      </div>
    );
  }
}