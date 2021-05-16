import React from 'react';
import human from '../../../../assets/icons/human.png';
import './cube.scss';

class Cube extends React.Component{

  renderCube = () => {
    const {width, height, depth} = this.props;
    return(<div class="base"
    style={{height:height*5, width: width*5, position:'absolute', margin:0}}
    >
      <div class="top"
        style={{
          height:depth*5
        }}
      ></div>
      <div class="down"
        style={{
          height:depth*5
        }}
      ></div>
      <div class="right"
        style={{
          width:depth*5
        }}
      ></div>
      <div class="left"
        style={{
          width:depth*5
        }}
      ></div>
      <div class="aux"
        style={{
          height:depth*5
        }}
      >
        <div class="front"
        style={{
          height:height*5
        }}
      ></div>
        <div class="back"
        style={{
          height:height*5
        }}
      ></div>
      </div>
    </div>
    )
  }
  render(){
    
    return(
      <div style={{display:'flex', justifyContent:'center', alignItems:'flex-end', flex:1}}>
        <img src={human} alt="human" style={{width:'10rem'}}></img>
        {this.renderCube()}
        
      </div>
      )
  }
}

export default Cube;