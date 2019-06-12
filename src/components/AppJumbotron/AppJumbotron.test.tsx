import React from 'react';
import ReactDOM from 'react-dom';
import AppJumbotron from './AppJumbotron';

// smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppJumbotron />, div);
  ReactDOM.unmountComponentAtNode(div);
});