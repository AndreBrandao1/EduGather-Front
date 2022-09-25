import React from "react";
import Link from "next/link";

export function StartNow({ src, firstText, secondText, href, buttonLabel }) {
  return (
    <>
      <div className="container">
        <div className="startLink">
          <span>{firstText}</span>
          <h2>{secondText}</h2>
          <Link href={href}>
            <button>{buttonLabel}</button>
          </Link>
        </div>
        <img src={src} />
      </div>
      <style jsx>
        {`
          h2 {
            font-size: 35px;
            color: rgb(223, 170, 58);
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
            max-width: 100%;
            height: auto;
            bottom: 0;
          }
          .startLink {
            flex: 0 0 50%;
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-self: center;
          }

          .startLink span {
            font-size: 35px;
          }
          .startLink button {
            background-color: rgb(223, 170, 58);
            width: 150px;
            color: white;
            font-weight: bold;
            padding: 20px 30px;
            border-radius: 25px;
            font-size: 18px;
          }

          @media and screen (min-width: 768px) {
            .container {
              padding: 150px 350px;
            }
          }
        `}
      </style>
    </>
  );
}
