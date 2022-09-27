import React from "react";
import Link from "next/link";

export function StartNow({ src, firstText, secondText, href, buttonLabel }) {
  return (
    <>
      <div className="container">
        <img src={src} />
        <div className="startLink">
          <span>{firstText}</span>
          <h2>{secondText}</h2>
          <Link href={href}>
            <button>{buttonLabel}</button>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          h2 {
            font-size: 25px;
            color: #f27d42;
            font-weight: bold;
          }

          .container {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 100px 150px;
          }
          .container img {
            flex: 0 0 50%;
            max-width: 150%;
            height: auto;
            bottom: 0;
          }
          .startLink {
            flex: 0 0 30%;
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-self: center;
            align-items: center;
            text-align: center;
          }

          .startLink span {
            font-size: 25px;
          }
          .startLink button {
            background-color: #f27d42;
            width: 120px;
            color: white;
            font-weight: bold;
            padding: 15px 20px;
            border-radius: 25px;
            font-size: 15px;
            margin-top: 20px;
          }

          @media and screen (min-width: 768px) {
            .container {
              padding: 150px 450px;
            }

            h2 {
              font-size: 35px;
            }

            .container img {
              flex: 0 0 50%;
            }

            .startLink {
              flex: 0 0 50%;
            }

            .startLink button {
              width: 150px;
              padding: 20px 30px;
              border-radius: 25px;
              font-size: 18px;
            }
            .startLink span {
              font-size: 35px;
            }
          }
        `}
      </style>
    </>
  );
}
