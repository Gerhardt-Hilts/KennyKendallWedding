// Libraries
import React from 'react';

// Components
import AppMediaPreview from '../../components/AppMediaPreview/AppMediaPreview';

// Styles
import styles from './PortraitPreview.module.scss';


export default class PortraitPreview extends React.Component {
  render() {
    return(
      <div className={styles.container}>
        <AppMediaPreview/>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
      </div>
    );
  }
}