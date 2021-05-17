import React from 'react';
import {Container} from 'react-bootstrap';
import { motion } from "framer-motion";
import './home.scss';
import Introduction from './introduction/Introduction';
import Dimensions from './dimensions/Dimensions';
import Inspirations from './inspirations/Inspirations';

const navs = [
  {
    name:'Introduction'
  },
  {
    name:'Dimension Tool'
  },
  {
    name:'Inspiration Tool'
  },
]

class Home extends React.Component{
  state = {
    selected_slide:'Introduction'
  }
  renderNavigators = () => {
    return(
      <div className="navigator">
        {
          navs.map((nav, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }} 
              onClick={()=>{
                this.setState({selected_slide:nav.name})
              }}
            className={`nav-item-${this.state.selected_slide===nav.name ? 'active' : 'inactive'}`}>
              <p>{nav.name}</p>
            </motion.div>
          ))
        }
      </div>
    )
  }

  renderContent =() => {
    switch(this.state.selected_slide){
      case 'Introduction':
        return<Introduction></Introduction>
      case 'Dimension Tool':
        return<Dimensions></Dimensions>
      case 'Inspiration Tool':
        return<Inspirations></Inspirations>
      default:
        return;
    }
  }

  render(){
    return(
      <Container fluid id="home">
        {this.renderNavigators()}
        <div className="content">
        {this.renderContent()}
        </div>
      </Container>
    )
  }
}

export default Home;