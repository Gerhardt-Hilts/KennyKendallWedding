import React from 'react';
import ReactDOM from 'react-dom';
import AppGoToTop from './AppGoToTop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppGoToTop/>, div);
  ReactDOM.unmountComponentAtNode(div);
});