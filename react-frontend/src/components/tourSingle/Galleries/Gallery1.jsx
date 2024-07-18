import React, { useState } from "react";
import ImageLightBox from "./ImageLightBox";


export default function Gallery1(tourData) {
  const [activeLightBox, setActiveLightBox] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  return (
    <>
      <div className="tourSingleGrid -type-1 mt-30">
        <div className="tourSingleGrid__grid mobile-css-slider-2">
          {tourData.tourData.map((elm, i)=> (
              <img src={`${__STRAPI_CLIENT_URL__}`+elm.attributes.url} alt="image" />
          ))}
        
        </div>

        <div className="tourSingleGrid__button">
          <div
            style={{ cursor: "pointer" }}
            className="js-gallery"
            data-gallery="gallery1"
          >
            <span
              onClick={() => setActiveLightBox(true)}
              className="button -accent-1 py-10 px-20 rounded-200 bg-dark-1 lh-16 text-white"
            >
              See all photos
            </span>
          </div>
      
        </div>
      </div>
      <ImageLightBox
        images={tourData}
        activeLightBox={activeLightBox}
        setActiveLightBox={setActiveLightBox}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
    </>
  );
}
