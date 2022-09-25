import React from "react";

export function SponsoredTrainer({ src, trainerName, category }) {
  return (
    <>
      <div className="container">
        <img src={src} />
        <div className="trainerInfo">
          <h2>{trainerName}</h2>
          <p>{category}</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: auto;
            height: auto;

            display: flex;
            flex-direction: column;
            gap: 20px;

            padding: 20px;
          }

          .container img {
            max-width: 100%;
            max-height: auto;
            border-radius: 25px;
            z-index: 2;
          }

          .trainerInfo {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 5px solid yellow;
            border-radius: 25px;
            padding: 50px 0px 10px 0px;
            margin-top: -65px;
            color: white;
          }
        `}
      </style>
    </>
  );
}
