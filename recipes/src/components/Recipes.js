import React from 'react';
import SlikaTest from '../img/SlikaTest.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Recipes extends React.Component {
    render () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0
          };
        return (
            <div id='recipes-container'>
                <div>
                    <h2>Recipes</h2>
                </div>
                <Slider {...settings}>
                <div>
                    <img src={SlikaTest} alt="test"></img>
                </div>
                <div>
                    <img src={SlikaTest} alt="test"></img>
                </div>
                <div>
                    <img src={SlikaTest} alt="test"></img>
                </div>
                <div>
                    <img src={SlikaTest} alt="test"></img>
                </div>
                <div>
                    <img src={SlikaTest} alt="test"></img>
                </div>
                <div>
                    <img src={SlikaTest} alt="test"></img>
                </div>
      </Slider>
            </div>
        )
    }

}