import "./gallery.css";
import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const imgs = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const ScrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = ScrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center" style={{ overflow: "hidden" }}>
      <div
        className="app__gallery-content"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">Photo Gallary</h1>
        <p
          className=" p__opensans"
          style={{ color: "#AAA", marginTop: "2rem" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          saepe suscipit dolores, maiores ex voluptate ratione accusantium, sunt
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div
        className="app__gallery-images"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="app__gallery-images_container" ref={ScrollRef}>
          {imgs.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery__images-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__images-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
