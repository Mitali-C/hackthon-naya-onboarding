import React from 'react'; 
import './question.scss';

class Question extends React.Component{
  render(){
    return(
      <div id="question">
        <div className="user-icon"></div>
        <div className="question-container">
          <p>{this.props.question}</p>
        </div>
      </div>
    )
  }
}

export default Question;