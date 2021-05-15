import React from 'react'; 
import './option.scss';

class Option extends React.Component{
  
  render(){
    return(
      <div className={`option-${this.props.selected ? 'active' : 'inactive'}`} onClick={()=>this.props.selectOption(this.props.data.id)}>
        <p>{this.props.data.text}</p>
      </div>
    )
  }
}

export default Option;