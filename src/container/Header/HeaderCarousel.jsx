import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";
export default class HeaderCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      pauseOnHover: true,
      appendDots: (dots) => (
        <div style={{ padding: "10px" }}>
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => <div>{i + 1}</div>,
    };
    return <Slider {...settings}>{this.props.children}</Slider>;
  }
}
