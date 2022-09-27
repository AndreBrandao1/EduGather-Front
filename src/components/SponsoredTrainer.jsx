import React from "react";

export function SponsoredTrainer({ src, trainerName, category }) {
  return (
    <>
      <div className="container">
        <div className="userPic">
          <img src={src} />
        </div>
        <div className="trainerInfo">
          <h2>{trainerName}</h2>
          <p>{category}</p>
        </div>
      </div>
      <style jsx>
        {`
          h2 {
            font-size: 18px;
            font-weight: 600;
          }

          p {
            font-size: 15px;
          }
          .container {
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;
          }

          .userPic {
            z-index: 2;
            max-width: 100%;
            max-height: auto;
            border-radius: 25px;
            background-color: white;
          }
          .container img {
            max-width: 100%;
            max-height: auto;
            border-radius: 25px;
            z-index: 2;
          }

          .trainerInfo {
            background-color: #022444;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 5px solid #f27d42;
            border-radius: 25px;
            padding: 55px 0px 10px 0px;
            margin-top: -65px;
            color: #f27d42;
            gap: 10px;
          }
        `}
      </style>
    </>
  );
}
