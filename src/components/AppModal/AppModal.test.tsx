import React from 'react';
import ReactDOM from 'react-dom';
import AppModal from './AppModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppModal/>, div);
  ReactDOM.unmountComponentAtNode(div);
});