import React from 'react';
import ReactDOM from 'react-dom';
import AppGrid from './AppGrid';

// smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});