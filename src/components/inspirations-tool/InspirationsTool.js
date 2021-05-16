import React from 'react';
import Question from '../question/Question';
import {Container, Modal, InputGroup, FormControl, Button} from 'react-bootstrap';
import {data} from './images';
import axios from 'axios';
import './inspirations.scss';

class InspirationsTool extends React.Component{
  state = {
    selected:null,
    selected_option:Object.keys(data)[0],
    to_display_images:[],
    search_modal:false,
    search_keyword:''
  }
  componentDidMount(){
    // console.log(data[Object.keys(data)])
    this.refineData(Object.keys(data)[0])
  }

  refineData = (key) => {
    const data_temp = data[key];
    let arr = data_temp.map((img)=>{
      return {
        src:img.urls.thumb,
        width:1,
        height:1
      }
    } )
    this.setState({to_display_images:arr})
  }

  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  search = async() => {
    const url = `https://api.unsplash.com/search/photos?query=${this.state.search_keyword}&page=1&client_id=l19JIb6AQouQjLf49FjarlRonth-z8z2IOyMqstILio&per_page=300`;
    const response = await axios.get(url)
    if(response.status===200){
      const results = response.data.results;
      let arr = results.map((img)=>{
        return {
          src:img.urls.thumb,
          width:1,
          height:1
        }
      } )
      this.setState({to_display_images:arr, search_modal:false, search_keyword:'', selected_option:'Search'})
    }
  }

  renderSearchModal = () => {
    return(
      <Modal show={this.state.search_modal} onHide={()=>{this.setState({search_modal:false})}} centered>
        <Modal.Header closeButton style={{borderBottom:0}}>
          <Modal.Title>Search keyword</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Type here..."
              value={this.state.search_keyword}
              onChange={this.onChange}
              name="search_keyword"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={this.search}>Button</Button>
            </InputGroup.Append>
          </InputGroup>
        </Modal.Body>
      </Modal>
    )
  }

  render(){
    return(
      <Container id="inspirations">
        {this.renderSearchModal()}
        <Question question={"Which images are you inspired by?"}></Question>
        <div className="options-container">
          <div></div>
          {
            Object.keys(data).map((key, index) => (
              <div className={`text-option-${this.state.selected_option===key ? 'active' : 'inactive'}`} onClick={()=>{
                this.setState({selected_option:key});
                this.refineData(key);
              }}>
                <p>{key}</p>
              </div>
            ))
          }
          <div className={`text-option-inactive'}`} onClick={()=>{
            this.setState({search_modal:true})
            // this.setState({selected_option:key});
            // this.refineData(key);
          }}>
            <p>Search</p>
          </div>
        </div>
        {
          this.state.selected_option && (
            <div className="gallery">
              <div className="image-column">
                {this.state.to_display_images.slice(0,5).map((img, index)=>(
                  <img src={img.src} alt="search" key={index}></img>
                ))}
              </div>
              <div className="image-column">
                {this.state.to_display_images.slice(5,10).map((img, index)=>(
                  <img src={img.src} alt="search" key={index}></img>
                ))}
              </div>
              <div className="image-column">
                {this.state.to_display_images.slice(10,15).map((img, index)=>(
                  <img src={img.src} alt="search" key={index}></img>
                ))}
              </div>
              <div className="image-column">
                {this.state.to_display_images.slice(15,20).map((img, index)=>(
                  <img src={img.src} alt="search" key={index}></img>
                ))}
              </div>
              <div className="image-column">
                {this.state.to_display_images.slice(20,25).map((img, index)=>(
                  <img src={img.src} alt="search" key={index}></img>
                ))}
              </div>
              <div className="image-column">
                {this.state.to_display_images.slice(25,30).map((img, index)=>(
                  <img src={img.src} alt="search" key={index}></img>
                ))}
              </div>
            </div>
          )
        }
      </Container>
    )
  }
}

export default InspirationsTool;