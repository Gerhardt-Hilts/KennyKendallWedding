import React from 'react';
import Image from '../../assets/img/Banner.png';
import styles from './AppJumbotron.module.scss';

export default class AppJumbotron extends React.Component {
  render() {
    return(
      <div className={styles.container}>
        <img src={Image} alt={'banner'} className={styles.image}/>
      </div>
    );
  }
}