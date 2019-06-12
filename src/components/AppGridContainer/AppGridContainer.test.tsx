import React from 'react';
import ReactDOM from 'react-dom';
import AppGridContainer from './AppGridContainer';

// smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppGridContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});