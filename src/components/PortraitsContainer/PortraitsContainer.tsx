// Libraries
import React from 'react';

// Components
import PortraitPreview from "../PortraitPreview/PortraitPreview";

// Styles
import styles from './PortraitsContainer.module.scss';


export default class PortraitsContainer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <PortraitPreview/>
        <PortraitPreview/>
      </div>
    );
  }
}