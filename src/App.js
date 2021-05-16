import React from 'react';
import './App.scss';
import DimensionsTool from './components/dimensions-tool/DimensionsTool';
import InspirationsTool from './components/inspirations-tool/InspirationsTool';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';

class App extends React.Component{
  render(){
    return(
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/inspirations-tool'>
            <InspirationsTool />
          </Route>
          <Route exact path='/dimensions-tool'>
            <DimensionsTool />
          </Route>
          <Route
            path='/'
            component={Home}
          />
        </Switch>
      </Router>
    )
  }
}

export default App;
