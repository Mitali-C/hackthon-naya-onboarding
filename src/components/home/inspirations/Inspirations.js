import React from 'react';
import InspiritaionsTool from '../../inspirations-tool/InspirationsTool'; 
import {data} from './data';
import left from '../../../assets/icons/left.png';
import right from '../../../assets/icons/right.png';
import ImageZoom from 'react-medium-image-zoom';
import './inspirations.scss';

const progress = ['Idea', 'Design', 'Implementation'];

class Inspirations extends React.Component{
  state = {
    selected_progress_item:'Idea',
    idea_index:0,
    design_index:0
  }

  renderProgressBar = () => {
    return(
      <div className="progress-bar-container">
        {
          progress.map((item, index) => (
            <div className="progress-item" onClick={()=>{this.setState({selected_progress_item: item})}} key={index}>
              <div className={`progress-circle-${this.state.selected_progress_item===item ? 'active' : 'inactive'}`}></div>
              <p>{item}</p>
            </div>
          ))
        }
      </div>
    )
  }

  renderIdea = () => {
    const idea = data['idea'];
    const keys = Object.keys(data['idea']);
    const {idea_index} = this.state;
    return(
      <div className="idea">
        <div className="nav">
          {
            idea_index > 0 && <img src={left} alt="left" onClick={()=>{this.setState({idea_index:this.state.idea_index-1})}}></img>
          }
        </div>
        <div className="main">
          <h1>{keys[idea_index]}</h1>
          <ul>
            {
              idea[keys[idea_index]].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))
            }
          </ul>
        </div>
        <div className="nav">
          {
            idea_index !== keys.length-1 && <img src={right} alt="right" onClick={()=>{this.setState({idea_index:this.state.idea_index+1})}}></img>
          }
        </div>
      </div>
    )
  }

  renderDesign = () => {
    const designs = data['design'];
    const {design_index} = this.state;
    return(
      <div className="design">
        <div className="nav">
          {
            design_index > 0 && <img src={left} alt="left" onClick={()=>{this.setState({design_index:this.state.design_index-1})}}></img>
          }
        </div>
        <div className="main">
          {/* <img src={designs[design_index]} alt="design" ></img> */}
          <ImageZoom
              image={{
                src: designs[design_index],
                alt: 'design',
                className: 'img',
                style: { width: 'inherit' }
              }}
              zoomImage={{
                src: designs[design_index],
                alt: 'img',
              }}
              zoomMargin={10}
            />
        </div>
        <div className="nav">
          {
            design_index !== designs.length-1 && <img src={right} alt="right" onClick={()=>{this.setState({design_index:this.state.design_index+1})}}></img>
          }
        </div>
      </div>
    )
  }

  renderData = () => {
    switch(this.state.selected_progress_item){
      case 'Idea':
        return this.renderIdea();
      case 'Design':
        return this.renderDesign();
      case 'Implementation':
        return <InspiritaionsTool></InspiritaionsTool>
      default:
        return;
    }
  }

  render(){
    return(
      <div id="dimensions">
        {this.renderProgressBar()}
        {this.renderData()}
      </div>
    )
  }
}

export default Inspirations;