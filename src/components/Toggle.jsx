import React from "react";

export function Toggle({
  text,
  id_1,
  id_2,
  name,
  value_1,
  value_2,
  msg_1,
  msg_2,
}) {
  return (
    <>
      <p>{text}</p>

      <input type="radio" id={id_1} name={name} value={value_1} />
      <label for={id_1}>{msg_1}</label>

      <input type="radio" id={id_2} name={name} value={value_2} />
      <label for={id_2}>{msg_2}</label>

      <style jsx>
        {`
          label {
            display: inline-block;
            width: 100px;
            padding: 10px;
            border: solid 2px #ccc;
            transition: all 0.3s;
            cursor: pointer;
          }

          input[type="radio"] {
            display: none;
          }

          input[type="radio"]:checked + label {
            border: solid 2px purple;
          }
        `}
      </style>
    </>
  );
}
