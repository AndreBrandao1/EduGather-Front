import React from "react";
import { useRouter } from "next/router";

export function SmallCourseCard({ title, btn_value, route }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`${route}`);
  };
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <button onClick={handleClick}>{btn_value}</button>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-between;
          }

          button {
            color: white;
            background-color: purple;
            padding: 5px 10px;
            border-radius: 20px;
          }

          button:hover {
            opacity: 0.9;
            transform: translateY(-3px);
          }

          button:active {
            background-color: yellow;
          }
        `}
      </style>
    </>
  );
}
