// Slideshow.js
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const slideImages = [
  {
    url: "https://new-tech.mn/wp-content/uploads/2023/02/proart-4080.webp",
    caption: "Slide 1",
  },
  {
    url: "https://new-tech.mn/wp-content/uploads/2023/02/14thgenCpu.webp",
    caption: "Slide 2",
  },
  {
    url: "https://new-tech.mn/wp-content/uploads/2023/02/1-26.webp",
    caption: "Slide 3",
  },
  {
    url: "https://new-tech.mn/wp-content/uploads/2023/08/Slide-123-11.webp",
    caption: "Slide 4",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
