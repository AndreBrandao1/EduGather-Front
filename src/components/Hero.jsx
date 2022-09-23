import React, { Component } from "react";
import Typical from "react-typical";
import { useState, useEffect } from "react";
import ReactTyped from "react-typed";

export function Hero() {
  const images = [
    "/assets/educate.jpg",
    "/assets/love.jpg",
    "/assets/build.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="hero">
        <div className="overlay"></div>
        <div className="type">
          <h1>Edugather</h1>
          <ReactTyped
            loop
            typeSpeed={100}
            backSpeed={120}
            strings={["Educate", "Love", "Build"]}
            smartBackspace
            shuffle={false}
            backDelay={1}
            fadeOut={false}
            fadeOutDelay={100}
            loopCount={0}
            showCursor
            cursorChar="|"
          />
        </div>
      </div>

      <style jsx>
        {`
          .hero {
            align-items: center;
            background-image: url(${currentImage});
            background-size: cover;
            color: white;
            display: flex;
            font-size: 30px;
            gap: 20px;
            height: 100vh;
            justify-content: center;
            width: 100%;
            position: relative;
            transition: background-image 2.5s ease;
          }
          h1 {
            font-size: 50px;
            color: white;
          }

          .overlay {
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.5;
          }

          .type {
            position: absolute;
            display: flex;
            align-items: center;
            gap: 15px;
          }
        `}
      </style>
    </>
  );
}
