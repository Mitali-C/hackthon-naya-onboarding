import React from 'react';
import './App.scss';
import DimensionsTool from './components/dimensions-tool/DimensionsTool';
import InspirationsTool from './components/inspirations-tool/InspirationsTool';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/inspirations'>
            <InspirationsTool />
          </Route>
          <Route
            path='/'
            component={DimensionsTool}
          />
        </Switch>
      </Router>
    )
  }
}

export default App;
