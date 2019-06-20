// Libraries
import React from 'react';

// Styles
import styles from './Bio.module.scss';


interface Props {
  name?: string,
  info?: string
}

interface State {
  name?: string,
  info?: string
}

export default class Bio extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    let name = '~NAME HERE~';
    let info = '~INFO HERE~';

    if (props.name !== undefined) {
      name = props.name;
    }

    if (props.info !== undefined) {
      info = props.info;
    }

    this.state = {
      name,
      info
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.name}>{this.state.name}</div>
        <div className={styles.info}>{this.state.info}</div>
      </div>
    );
  }
}