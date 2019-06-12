import React from 'react';
import AppJumbotron from "../AppJumbotron/AppJumbotron";

import './AppHeader.scss';

export default class AppHeader extends React.Component {
  render() {
    return(
      <div className={'appHeaderContainer'}>
        <AppJumbotron/>
        <div className={'appHeaderTitleContainer'}>
          <div className={'appHeaderTitleCard'}>
            <div className={'appHeaderTextContainer'}>
              <div>Congratulations<span className={'appHeaderSpace'}/></div><div>Kenny and Kendall</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
