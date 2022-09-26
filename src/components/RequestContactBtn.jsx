import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function RequestContactBtn({ getId, displayApprove, handleClick }) {
  return (
    <>
      <button
        type="button"
        value={getId}
        className="contact"
        onClick={(e) => {
          handleClick({ getId });
        }}
      >
        <FontAwesomeIcon icon={faPaperPlane} width={40} height={40} />
        <span>Send Contact Request</span>
      </button>
      <style jsx>
        {`
          .contact {
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 10px 15px;
            width: 170px;
            height: auto;
            background-color: green;
            border-radius: 20px;
            display: ${displayApprove};
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}
