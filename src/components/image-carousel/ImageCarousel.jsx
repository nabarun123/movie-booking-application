import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

function ImageCarousel({ images }) {
  return (
    <div className="shadow-lg">
      <CCarousel controls indicatorsW>
        {images.map((image, index) => {
          return (
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={image}
                alt={`slide ${index + 1}`}
              />
            </CCarouselItem>
          );
        })}
      </CCarousel>
    </div>
  );
}

export default ImageCarousel;
