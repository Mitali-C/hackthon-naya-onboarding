import React from 'react';
import './App.scss';
import DimensionsTool from './components/dimensions-tool/DimensionsTool';
import InspirationsTool from './components/inspirations-tool/InspirationsTool';

class App extends React.Component{
  render(){
    return(
      <div>
        <DimensionsTool></DimensionsTool>
        <InspirationsTool></InspirationsTool>
      </div>
    )
  }
}

export default App;
