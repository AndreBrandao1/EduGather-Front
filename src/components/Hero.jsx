import React, { Component } from "react";
import { useState, useEffect } from "react";
import ReactTyped from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
        <div className="arrow">
          <a href="#firstStep">
            <FontAwesomeIcon icon={faChevronDown} width={50} height={50} />
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .arrow {
            z-index: 5;
            color: white;
            position: absolute;
            bottom: 0;
            animation: jumpInfinite 1.5s infinite;
            text-decoration: none;
          }

          .arrow a:hover {
            color: #f27d42;
          }
          .hero {
            align-items: center;
            background-image: url(${currentImage});
            background-size: cover;
            color: white;
            display: flex;
            flex-direction: column;
            font-size: 25px;
            gap: 20px;
            height: 100vh;
            justify-content: center;
            width: 100%;
            position: relative;
            transition: background-image 2.5s ease;
          }
          h1 {
            font-size: 30px;
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
            color: #f27d42;
          }

          @keyframes jumpInfinite {
            0% {
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @media screen and (min-width: 992px) {
            .hero {
            }
            font-size: 50px;
          }

          h1 {
            font-size: 50px;
          }
        `}
      </style>
    </>
  );
}
