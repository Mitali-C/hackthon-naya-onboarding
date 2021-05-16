import React from 'react';
import logo from '../../../assets/brand/logo.png';
import './introduction.scss';

class Introduction extends React.Component{
  render(){
    return(
      <div id="intro">
        <img src={logo} alt="logo" className="logo"></img>
        {/* <h1 >hack onboarding</h1> */}
        <h1 data-text="hack onboarding"><span>hack onboarding</span></h1>
      </div>
    )
  }
}

export default Introduction;