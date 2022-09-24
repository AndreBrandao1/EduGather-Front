import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export function ManageResources({
  resourceTitle,
  resourceName,
  hrefTitle,
  hrefName,
  getId,
  approve,
  refuse,
}) {
  return (
    <>
      <div className="resourceContainer">
        <div className="info">
          <Link href={hrefTitle}>{resourceTitle}</Link>
          <Link href={hrefName}>{resourceName}</Link>
        </div>
        <div className="buttons">
          <div
            className="approve"
            onClick={() => {
              {
                getId;
              }
              {
                approve;
              }
            }}
          >
            <FontAwesomeIcon icon={faCheck} width={30} height={30} />
          </div>
          <div className="deny" onClick={refuse}>
            <FontAwesomeIcon icon={faX} width={30} height={30} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .approve {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background-color: green;
            border-radius: 20px;
          }
          .buttons {
            color: white;
            display: flex;
            gap: 20px;
          }
          .deny {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background-color: red;
            border-radius: 20px;
          }

          .info {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          h2 {
            font-size: 20px;
            font-weight: bold;
          }
          .resourceContainer {
            align-items: center;
            background-color: lightgrey;
            border-radius: 25px;
            display: flex;
            justify-content: space-between;
            height: auto;
            padding: 40px;
            width: 60%;
          }
        `}
      </style>
    </>
  );
}
