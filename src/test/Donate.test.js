import React from 'react';
import ReactDOM from 'react-dom';
import Donate from './components/Donate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Donate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
