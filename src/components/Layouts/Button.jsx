import React from "react";

export function Button({ btn_txt, bk_color, color }) {
  return (
    <>
      <button className="btn">{btn_txt}</button>

      <style jsx>{`
        .btn {
          width: 150px;
          height: 48px;
          padding: 16px 16px 16px 16px;
          background: ${bk_color};
          color: ${color};
          border-radius: 5%;
          font-size: 17px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Roboto", sans-serif;
          text-transform: uppercase;
          transition: all 0.15s ease-in-out;
        }

        .btn:hover {
          /* background: linear-gradient(
            49deg,
            rgba(162, 11, 232, 1) 1%,
            rgba(16, 178, 163, 1) 84%
          ); */
          opacity: 0.9;
          transform: translateY(-3px);
        }
      `}</style>
    </>
  );
}
