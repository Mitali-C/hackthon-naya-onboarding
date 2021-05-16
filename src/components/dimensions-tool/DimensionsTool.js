import React from 'react';
import Question from '../question/Question';
import {Container} from 'react-bootstrap';
import {data} from './data';
import Option from '../option/Option';
import './dimensions-tool.scss';
import StandardDimensions from './standard-dimensions/StandardDimensions';

const help = {
  d:'1',
  question:'What would you like to do?',
  type:'dimensions',
  options:[
    {
      text:'Measure your space',
      id:'1'
    },
    {
      text:'Search standard dimensions',
      id:'2'
    },
    // {
    //   text:'I know the exact dimensions',
    //   id:'3'
    // },
  ]
}

class DimensionsTool extends React.Component{
  state = {
    selected1:null,
    selected2:null,
  }
  componentDidMount(){
  }

  selectOption1 = (text) => {
    this.setState({selected1:text})
  }

  selectOption2 = (text) => {
    this.setState({selected2:text})
  }

  renderDataAsPerSelection = () => {
    if(this.state.selected1==='Add'){
      return <StandardDimensions type="add"></StandardDimensions>
    }
    else{
      switch(this.state.selected2){
        case 'Search standard dimensions':
          return(
            <StandardDimensions type="standard"></StandardDimensions>
          )
        case 'Measure your space':
          return(
            <StandardDimensions type="advanced"></StandardDimensions>
          )
        default:
          break;
      }
    }
  }

  render(){
    return(
      <Container id="dimensions">
        <Question question={data.question}></Question>
        <div className="options-container">
        {
          data.options.map((option, index) => (
            <Option key={index} data={option} selectOption={this.selectOption1} selected={this.state.selected1===option.text}></Option>
          ))
        }
        </div>
        {
          this.state.selected1==='Help me decide' && (
            <>
              <Question question={help.question}></Question>
              <div className="options-container">
              {
                help.options.map((option, index) => (
                  <Option key={index} data={option} selectOption={this.selectOption2} selected={this.state.selected2===option.text}></Option>
                ))
              }
              </div>
            </>
          )
        }
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