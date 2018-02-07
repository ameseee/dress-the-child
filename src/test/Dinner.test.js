import React from 'react';
import ReactDOM from 'react-dom';
import Dinner from './components/Dinner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dinner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
