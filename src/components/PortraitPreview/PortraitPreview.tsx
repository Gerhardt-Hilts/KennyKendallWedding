// Libraries
import React from 'react';

// Components
import AppMediaPreview from '../../components/AppMediaPreview/AppMediaPreview';

// Styles
import './PortraitPreview.scss';


export default class PortraitPreview extends React.Component {
  render() {
    return(
      <div className={'portraitPreviewContainer'}>
        <AppMediaPreview/>
        <div>Some text</div>
        <div>Some text</div>
        <div>Some text</div>
      </div>
    );
  }
}