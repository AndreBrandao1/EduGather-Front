import React from "react";
import { useRef } from "react";
import { Children } from "react";
import { useState } from "react";

export function Collapsable({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef();
  return (
    <>
      <div className="collapsable">
        <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
          {label}
        </button>
        <div
          className="content-container"
          ref={containerRef}
          style={
            isOpen
              ? {
                  height: containerRef.current.scrollHeight + "px",
                }
              : {
                  height: "0px",
                }
          }
        >
          <div className="content">{children}</div>
        </div>
      </div>

      <style jsx>
        {`
          .toggle {
            border: unset;
            width: 100%;
            text-align: left;
            border-top-left-radius: 15px;
            border-bottom: 1px solid purple;

            padding: 5px 5px 0 5px;
          }
          .collapsable .content {
            padding: 20px 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .collapsable .content-container {
            height: 0px;
            overflow: hidden;
            transition: height ease 0.3s;
          }
        `}
      </style>
    </>
  );
}
