import { SmallTitle } from "@/../public/styles/styledComponents";
import React from "react";

export function Square({ src, title, children }) {
  return (
    <>
      <div className="square">
        <div className="logo">
          <img src={src} />
        </div>
        <h2>{title}</h2>
        <div className="children">{children}</div>
      </div>
      <style jsx>
        {`
          .children {
            display: flex;
            flex-direction: column;
          }

          h2 {
            font-size: 15px;
            font-weight: bold;
            color: #00994c;
          }

          .logo {
            background-color: #00ff80;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            padding: 10px;
            width: 50px;
          }
          .square {
            background-color: #99ffcc;
            border-radius: 25px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 15px;
            max-width: 200px;
            height: 200px;
          }
        `}
      </style>
    </>
  );
}
