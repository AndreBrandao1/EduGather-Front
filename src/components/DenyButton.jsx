import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";

export function DenyButton({ getId, displayDeny }) {
  return (
    <>
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
      <style jsx>
        {`
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
        `}
      </style>
    </>
  );
}
