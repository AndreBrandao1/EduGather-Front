import React from "react";
import { useState, UseEffect, useEffect } from "react";

export function SlideShow({ img_1, img_2, img_3 }) {
  const background = [{ img_1 }, { img_2 }, { img_3 }];
  const [index, setIndex] = useState(0);
  const delay = 1500;

  useEffect(() => {
    setTimeout(
      () =>
        setIndex(function (prevIndex) {
          return prevIndex === background.length - 1 ? 0 : prevIndex + 1;
        }),
      3500
    );

    return () => {};
  }, [index]);
  return (
    <>
      <div className="slideshow">
        <div className="slideshowSlider">
          {background.map((image, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>

      <style jsx>
        {`
          /* Slideshow */

          .slideshow {
            overflow: hidden;
            max-width: 40%;
            max-height: 1000px;
            background-color: red;
          }

          .slideshowSlider {
            white-space: nowrap;
            transform: translate3d(${-index * 100}%, 0, 0);
            transition: ease 1s;
          }

          .slide {
            display: inline-block;
            height: 400px;
            width: 100%;
            background-image: url(${img_1});
            background-size: 100%;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </>
  );
}
