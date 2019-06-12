import React from 'react';
import Image from '../../assets/img/Banner.png';
import './AppJumbotron.scss';

export default class AppJumbotron extends React.Component {
  render() {
    return(
      <div className={'container'}>
        <img src={Image} alt={'banner'} className={'image'}/>
      </div>
    );
  }
}