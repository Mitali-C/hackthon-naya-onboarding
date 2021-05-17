import React from 'react';
import {FormControl, Dropdown, InputGroup} from 'react-bootstrap';
import Cube from './cube/Cube';
import {data} from './data';
import open from '../../../assets/icons/open.png';
import ref from '../../../assets/design/dimension/measure-app.png';
import './standard-dimensions.scss';

class StandardDimensions extends React.Component{
  state = {
    search_text:'',
    filtered_options:[],
    selected_option:null,
    width:0,
    height:0,
    depth:0
  }

  componentDidMount(){
    this.setState({filtered_options: Object.keys(data)})
  }

  onChange = (e) => {
    if(e.target.name==='search_text'){
      if(e.target.value.trim().length!==0){
        const all_options = Object.keys(data);
        let filtered = all_options.filter(option => option.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({
          [e.target.name]: e.target.value,
          filtered_options:filtered
        })
      }
      else{
        this.setState({filtered_options: Object.keys(data)})
      }
    }
    else{
      this.setState({[e.target.name]: e.target.value})
    }
  }

  selectOption = (option) => {
    this.setState({selected_option:option, width:data[option].width, height:data[option].height, depth:data[option].depth, search_text:''});
  }

  renderDropDown = () => {
    return(
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {!this.state.selected_option ? 'Select' : this.state.selected_option}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <FormControl type="text" placeholder="search" name="search_text" onChange={this.onChange}></FormControl>
          {
            this.state.filtered_options.map((option, index) => (
              <Dropdown.Item href="#/" onClick={(e)=>{
                e.preventDefault();
                this.selectOption(option)
              }} key={index}>{option}</Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  renderDimensions = () => {
    return(
      <div className="dimensions-inputs-container">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>width</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="Number" onChange={this.onChange} value={this.state.width} name="width" />
          <InputGroup.Append>
            <InputGroup.Text>inches</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        {/*  */}

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>height</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="Number" onChange={this.onChange} value={this.state.height} name="height" />
          <InputGroup.Append>
            <InputGroup.Text>inches</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        {/*  */}
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>depth</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="Number" onChange={this.onChange} value={this.state.depth} name="depth" />
          <InputGroup.Append>
            <InputGroup.Text>inches</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }

  render(){
    return(
      <div id="standard">
        {
          this.props.type==='standard' && (
            <div className="standard-dimensions-container">
              <p>Search for standard dimensions</p>
              {this.renderDropDown()}
            </div>
          )
        }
        {
          this.props.type === 'advanced' ? (
            <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
              <a style={{display:'flex', alignItems:'center', flexDirection:'column'}} href="https://apps.apple.com/us/app/tape-measure/id1271546805" target="_blank" rel="noopener noreferrer">
                <img src={open} alt="open link" style={{width:'4rem'}}></img>
                <h6>Send link to mobile app</h6>
              </a>
              <div style={{marginTop:'2rem', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <h6>How it works?</h6>
                <img src={ref} alt="app reference" style={{width:'20rem'}}></img>
              </div>
            </div>

          ) : (
            <div style={{display:'flex', flexWrap:'wrap'}}>
              {this.renderDimensions()}
              <Cube width={this.state.width}  height={this.state.height} depth={this.state.depth}></Cube>
            </div>
          )
        }
      </div>
    )
  }
}

export default StandardDimensions;