import React from "react";

export function Stats({
  first_field,
  second_field,
  first_color,
  second_color,
}) {
  return (
    <>
      <div className="stat_container">
        <p className="first_field">{first_field}</p>
        <p className="second_field">{second_field}</p>
      </div>
      <style jsx>
        {`
          .stat_container {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            padding: 10px;
          }
          .first_field {
            font-family: "Roboto", sans-serif;
            font-size: 18px;
            font-weight: bold;
            background-color: transparent;
            color: ${first_color};
          }

          .second_field {
            font-family: "Roboto", sans-serif;
            font-size: 16px;
            background-color: transparent;
            color: ${second_color};
            opacity: 0.9;
          }
        `}
      </style>
    </>
  );
}
