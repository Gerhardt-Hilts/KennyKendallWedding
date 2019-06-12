import React from 'react';
import ReactDOM from 'react-dom';
import PortraitsContainer from './PortraitsContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortraitsContainer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});