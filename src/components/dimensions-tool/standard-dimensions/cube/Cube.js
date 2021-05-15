import React from 'react';
import './cube.scss';

class Cube extends React.Component{
  render(){
    const {width, height, depth} = this.props;
    return(
      <div class="base"
      style={{height:height*7, width: width*7}}
      >
        <div class="top"
          style={{
            height:depth*7
          }}
        ></div>
        <div class="down"
          style={{
            height:depth*7
          }}
        ></div>
        <div class="right"
          style={{
            width:depth*7
          }}
        ></div>
        <div class="left"
          style={{
            width:depth*7
          }}
        ></div>
        <div class="aux"
          style={{
            height:depth*7
          }}
        >
          <div class="front"
          style={{
            height:height*7
          }}
        ></div>
          <div class="back"
          style={{
            height:height*7
          }}
        ></div>
        </div>
      </div>
    )
  }
}

export default Cube;