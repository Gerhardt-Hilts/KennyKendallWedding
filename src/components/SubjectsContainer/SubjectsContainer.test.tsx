import React from 'react';
import ReactDOM from 'react-dom';
import SubjectsContainer from './SubjectsContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubjectsContainer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});