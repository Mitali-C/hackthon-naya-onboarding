import React from 'react';
import Question from '../question/Question';
import {Container} from 'react-bootstrap';
import {data} from './data';
import Option from '../option/Option';
import './dimensions-tool.scss';
import StandardDimensions from './standard-dimensions/StandardDimensions';

class DimensionsTool extends React.Component{
  state = {
    selected:null
  }
  componentDidMount(){
  }

  selectOption = (id) => {
    this.setState({selected:id})
  }

  renderDataAsPerSelection = () => {
    switch(this.state.selected){
      case '1':
        return(
          <StandardDimensions type="standard"></StandardDimensions>
        )
      case '2':
        return(
          <StandardDimensions type="intermediate"></StandardDimensions>
        )
      case '3':
        return(
          <StandardDimensions type="advanced"></StandardDimensions>
        )
      default:
        break;
    }
  }

  render(){
    return(
      <Container id="dimensions">
        <Question question={data.question}></Question>
        <div className="options-container">
        {
          data.options.map((option, index) => (
            <Option key={index} data={option} selectOption={this.selectOption} selected={this.state.selected===option.id}></Option>
          ))
        }
        </div>
        <div>
          {
            this.renderDataAsPerSelection()
          }
        </div>
      </Container>
    )
  }
}

export default DimensionsTool;