import React from 'react';
import './AppFooter.scss';

export default class AppFooter extends React.Component {
  render() {
    return (
      <div className={'appFooter'}>
        <div className={'appFooterCopyrightText'}>© 2019 Init Industries, LLC.</div>
      </div>
    );
  }
}