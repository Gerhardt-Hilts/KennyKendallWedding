import React from 'react';
import ReactDOM from 'react-dom';
import AppMediaPreview from './AppMediaPreview';

it('renders without crashing', () => {
  const div = document.createElement( 'div' );
  ReactDOM.render(<AppMediaPreview />, div);
  ReactDOM.unmountComponentAtNode(div);
});