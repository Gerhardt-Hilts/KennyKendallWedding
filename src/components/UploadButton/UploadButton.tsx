// Libraries
import React from 'react';

// Assets
import UploadIcon from '../../assets/svg/UploadIcon.svg';

// Styles
import styles from './UploadButton.module.scss';


export default class UploadButton extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <object className={styles.uploadSvg} type={"image/svg+xml"} data={UploadIcon}>Flag - Your browser does not support SVG</object>
      </div>
    );
  }
}