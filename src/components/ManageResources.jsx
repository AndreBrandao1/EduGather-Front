import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "@/lib/axios";
import { useState } from "react";
export function ManageResources({
  resourceTitle,
  resourceName,
  hrefTitle,
  hrefName,
  getId,
  handleClick,
  decisionFunction,
  displayApprove,
  displayDeny,
}) {
  return (
    <>
      <div className="resourceContainer">
        <div className="info">
          <Link href={hrefTitle}>
            <h2>{resourceTitle}</h2>
          </Link>
          <Link href={hrefName}>{resourceName}</Link>
        </div>

        <form className="buttons">
          <button
            type="button"
            value={getId}
            className="approve"
            onClick={(e) => {
              handleClick("verified", getId);
            }}
          >
            <FontAwesomeIcon icon={faCheck} width={30} height={30} />
          </button>
          <button
            type="button"
            value={getId}
            className="deny"
            onClick={(e) => {
              handleClick("denied", getId);
            }}
          >
            <FontAwesomeIcon icon={faX} width={30} height={30} />
          </button>
        </form>
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
            display: ${displayApprove};
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
            display: ${displayDeny};
          }

          .info {
            display: flex;
            flex-direction: column;
            gap: 30px;
            justify-content: center;
          }

          h2 {
            font-size: 15px;
            font-weight: bold;
          }
          .resourceContainer {
            align-items: center;
            background-color: lightgrey;
            border-radius: 25px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
            height: auto;
            padding: 40px;
            width: 60%;
            text-align: center;
          }

          @media screen and (min-width: 992px) {
            h2 {
              font-size: 16px;
              font-weight: bold;
            }

            .info {
              flex-direction: row;
              gap: 50px;
            }
            .resourceContainer {
              flex-direction: unset;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  );
}
