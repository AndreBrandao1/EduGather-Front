import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa2,
  faCheck,
  faCircle,
  faPlug,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export function HomeSquare2({ color, iconSmall, iconBig }) {
  return (
    <>
      <div className="container">
        <div className="small">
          <FontAwesomeIcon icon={fa2} width={50} height={30} />
        </div>
        <div className="big">
          <FontAwesomeIcon icon={faPlug} width={150} height={50} />
          <span>Contact</span>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            max-width: 100px;
            height: auto;
            padding: 30px 20px;
            display: flex;
            gap: 5px;
            justify-content: center;
          }
          .small {
            background-color: white;
            border: 6px solid #58bdca;
            display: flex;
            align-items: center;
            border-radius: 10px;
            color: #58bdca;
            padding: 10px;
            height: 85px;
          }
          .big {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px 60px;
            background-color: #58bdca;
            border-radius: 20px;
            color: white;
            gap: 10px;
          }
          span {
            font-size: 25px;
          }

          @media screen and (min-width: 992px) {
            .container {
              width: auto;
              padding: 20px;
              flex-direction: row;
            }

            .big {
              padding: 50px 60px;
              gap: 10px;
              border-radius: 20px;
            }

            .small {
              border-radius: 10px;
              padding: 10px;
              height: 85px;
            }
          }
        `}
      </style>
    </>
  );
}
