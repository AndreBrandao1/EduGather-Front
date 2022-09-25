import React from "react";
import { useEffect, useState, useRef } from "react";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef();
  useEffect(() => {
    const windowW = window.innerWidth;
    console.log(windowW);
  }, []);

  return (
    <>
      <div className="sideBar">
        <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </button>
        <div
          className="content-container"
          ref={containerRef}
          style={
            isOpen
              ? {
                  width: "100vw",
                  height: "50vh",
                }
              : {
                  width: "0px",
                  height: "0px",
                }
          }
        >
          <div className="content">
            <button onClick={() => setIsOpen(!isOpen)}>X</button>
            <a>Test</a>
            <a>Test</a>
            <a>Test</a>
            <a>Test</a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .sideBar{
          position:fixed;
          z-index: 10;
        }
          .toggle {
            border: unset;
            width: 100%;
            text-align: left;
            border-top-left-radius: 15px;
            

            padding: 5px 5px 0 5px;
          }
          .content {
            padding: 20px 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: white;
            transition: width  ease 0.3s;
            align-items: center;
       
          }

          .content a{
            font-weight: bold;
            font-size: 25px:
          }
          .content-container {
            
            overflow: hidden;
            transition: width  ease 0.3s;
            background-color: purple;
            transition: ease 0.3s;
          
            z-index: 5;
          }
        `}
      </style>
    </>
  );
}
