import React from 'react';
import ReactDOM from 'react-dom';
import AppMediaContainer from './AppMediaContainer';

// smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMediaContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});