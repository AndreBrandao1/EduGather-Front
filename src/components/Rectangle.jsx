import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rectangle({
  redirectTo,
  first_el,
  second_el,
  src,
  bk_color,
  children,
  tabletWidth,
  desktopWidth,
}) {
  return (
    <>
      <a href={redirectTo}>
        <div className="container">
          <div className="text">
            <h2>{first_el}</h2>
            <p>{second_el}</p>
          </div>
          {children}
        </div>
      </a>
      <style jsx>
        {`
          .container {
            background: ${bk_color};
            border-radius: 25px;
            color: white;
            display: flex;
            height: auto;
            justify-content: space-between;
            padding: 40px 20px;
            width: 200px;
          }

          h2 {
            font-size: 20px;
            font-family: Inter;
            font-weight: 600;
          }

          p {
            font-size: 15px;
          }

          .text {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          @media screen and (min-width: 768px) {
            .container {
              width: ${tabletWidth};
              padding: 30px 20px;
              height: 250px;
            }

            h2 {
              font-size: 25px;
            }

            p {
              font-size: 20px;
            }
          }
          @media screen and (min-width: 992px) {
            .container {
              width: ${desktopWidth};
              padding: 30px 20px;
            }

            h2 {
              font-size: 25px;
            }

            p {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  );
}

export default Rectangle;
