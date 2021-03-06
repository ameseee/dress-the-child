import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Routes from './utils/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ App }/>
      <Routes />
    </div>
  </BrowserRouter>
), document.getElementById('root')
);

registerServiceWorker();
