import React from 'react';
import Recipes from './Recipes';
import Inrecipe from './Inrecipe';
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data : null
        }
    }
   
    componentDidMount(){
        axios.get('https://api.spoonacular.com/recipes/search?query=burger&number=10&apiKey=a8a78069d78b4d5d99564bbf6316dced')
        .then((response) => {
            console.log(response.data)
          const recipes = response.data.results.map(element=>{
          return  <div className="slider-container">
            <div className="in-slider">
           <Link to ='/recipes'><img className="img-con" src={"https://spoonacular.com/recipeImages/" +  element.imageUrls} alt="test"></img></Link> 
            <h1 className="slider-h1">{element.title}</h1>
          <i class="far fa-star">{element.readyInMinutes}</i>
          <i class="far fa-star">{element.servings}</i>
            
            </div>
        </div>
        
          })
          this.setState({data : recipes})
            
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
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0
          };
        
        return ( 
        <React.Fragment>
        <div id="header">
            <div className="header-container">                
                    <i class="fas fa-home"></i>
                    <a class="logo" href="/"><h1>Crunch Recipes</h1></a>     
            </div>
            <div className="search-user">
                <i class="fas fa-search"></i>
                <i class="fas fa-user"></i>
            </div>            
        </div>
        <div>
        <div id='recipes-container'>                
                    <h2 className="header-recipes">Weekly Top Picks</h2>                
                <Slider {...settings}>
            {this.state.data}
      </Slider>
            </div>            
        </div>
        </React.Fragment>     
            
        )
    }
};