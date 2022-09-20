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
            gap: 10px;
            align-items: center;
            justify-content: center;
            padding: 10px;
          }
          .first_field {
            font-family: "Roboto", sans-serif;
            font-size: 12px;
            font-weight: 600;
            background-color: transparent;
            color: ${first_color};
          }

          .second_field {
            font-family: "Roboto", sans-serif;
            font-size: 15px;
            background-color: transparent;
            color: ${second_color};
            opacity: 0.9;
          }
        `}
      </style>
    </>
  );
}
