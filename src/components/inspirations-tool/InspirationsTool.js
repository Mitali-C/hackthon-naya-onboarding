import React from 'react';
import Question from '../question/Question';
import {Container} from 'react-bootstrap';
import {data} from './images';
import './inspirations.scss';

class InspirationsTool extends React.Component{
  state = {
    selected:null,
    selected_option:null,
    to_display_images:[],
    images:[
      {
          src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 174,
          caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
          src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
          thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 183,
          caption: "37H (gratispgraphy.com)"
      },
      {
          src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
          thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
          thumbnailWidth: 271,
          thumbnailHeight: 320,
          caption: "Orange Macro (Tom Eversley - isorepublic.com)"
      },
      {
          src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
          thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 213,
          caption: "201H (gratisography.com)"
      },
      {
          src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
          thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 213,
          caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
      },
      {
          src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
          thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 213,
          caption: "Man on BMX (Tom Eversley - isorepublic.com)"
      },
      {
          src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
          thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 213,
          caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
      },
      {
          src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
          thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
          thumbnailWidth: 257,
          thumbnailHeight: 320,
          caption: "A photo by 贝莉儿 NG. (unsplash.com)"
      }
  ]
  }
  componentDidMount(){
    console.log(data['Minimalism'][0].urls)
  }

  refineData = (key) => {
    const data_temp = data[key];
    let arr = data_temp.map((img)=>{
      // let width = img.width.toString();
      // let height = img.height.toString();
      return {
        src:img.urls.thumb,
        width:1,
        height:1
        // width:parseInt(width.charAt(width.length-1))!== 0 ? parseInt(width.charAt(width.length-1))!== 0 : 1,
        // height:parseInt(height.charAt(height.length-1)) !== 0 ? parseInt(height.charAt(height.length-1)) : 1
      }
    } )
    console.log(arr);
    this.setState({to_display_images:arr})
  }

  render(){
    return(
      <Container id="inspirations">
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
        </div>
        {
          this.state.selected_option && (
            <div className="gallery">
              <div className="image-column">
                {this.state.to_display_images.slice(0,10).map((img, index)=>(
                  <img src={img.src} alt="search" key={index}></img>
                ))}
              </div>
              <div className="image-column">
                {this.state.to_display_images.slice(10,20).map((img, index)=>(
                  <img src={img.src} alt="search" key={index}></img>
                ))}
              </div>
              <div className="image-column">
                {this.state.to_display_images.slice(20,30).map((img, index)=>(
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