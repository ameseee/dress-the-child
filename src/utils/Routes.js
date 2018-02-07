import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from '../components/App';
import Dinner from '../components/Dinner';
import Donate from '../components/Donate';

class Routes extends Component {
  render() {
    return(
      <div>
        {/* <Route exact path="/" component={ App }/> */}
        <Route path="/dinner" component={ Dinner }/>
        <Route path="/donate" component={ Donate }/>
      </div>
    )
  }
}

export default Routes;
