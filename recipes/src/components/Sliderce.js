import React from 'react';
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import '../assets/Sliderce.css'


export default class Sliderce extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data : null,
            
        }
    }
   
    componentDidMount(){
      
        axios.get('https://api.spoonacular.com/recipes/search?query=burger&number=10&apiKey=a8a78069d78b4d5d99564bbf6316dced')
        .then((response) => { 
            console.log(response.data)
          const recipes = response.data.results.map(element=>{
          return ( 
          <div className="slider-container">
            <div className="in-slider">
              <div className="img-con">
           <Link to ={'/'+ element.id} ><img className="img-in" src={"https://spoonacular.com/recipeImages/" +  element.imageUrls} alt="test"></img></Link>
             </div>   
             <div className="inslider-title">
            <span>{element.title}</span>
            </div>   
            <div className="slider-footer">
            <div className="clock-icon">
          <i className="far fa-clock"> {element.readyInMinutes} minutes</i>
          </div>
          <div className="food-icon">
          <i className="fas fa-utensils"> {element.servings} serving</i>
          </div>
          </div>                                
            </div>            
           
          
        </div>
        )
          })
          this.setState({
            data : recipes
                     })
            
        })      
        .catch((err) => {
            console.log(err)
           })
    }

    render () {
      var  settings = {
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true
            
          };
        
        return ( 
        <React.Fragment>
        
        <div id='recipes-container'>                
                    <h2 className="header-recipes">Weekly Top Picks</h2>    
                            
                <Slider {...settings} >
            {this.state.data}
      </Slider>
       
            </div>            
              </React.Fragment>     
            
        )
    }
};