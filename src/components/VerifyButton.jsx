import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";

export function VerifyButton({ getId, displayApprove }) {
  return (
    <>
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
        `}
      </style>
    </>
  );
}
