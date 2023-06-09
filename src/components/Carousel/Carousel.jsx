import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from 'react'

export default class Carousel extends Component {

  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: this.props.slideToShow,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 10000,
        arrows:false,
      };
    return (
         <Slider {...settings}>
            {this.props.children}
         </Slider>
    )
  }
}
