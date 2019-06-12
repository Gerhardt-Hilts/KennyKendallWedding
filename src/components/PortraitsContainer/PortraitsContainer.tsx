// Libraries
import React from 'react';

// Components
import PortraitPreview from "../PortraitPreview/PortraitPreview";

// Styles
import './PortraitsContainer.scss';


export default class PortraitsContainer extends React.Component {
  render() {
    return (
      <div className={'portraitsContainer'}>
        <PortraitPreview/>
        <PortraitPreview/>
      </div>
    );
  }
}