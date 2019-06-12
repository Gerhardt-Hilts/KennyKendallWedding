import React from 'react';
import './AppGridContainer.scss';

export default class AppGridContainer extends React.Component {
  render() {
    return(
      <div className={'appGridContainer'}>
        {this.props.children}
      </div>
    );
  }
}