import React from "react";
import Image from "next/image";

export function Comment() {
  return (
    <>
      <div className="comment-container">
        <img src="/assets/userpic.png" />
        <div className="comment">
          <p>
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            dolorum odio, non ullam consequuntur dignissimos veritatis. Ullam,
            saepe harum nihil optio vitae cum voluptate, voluptatem labore, aut
            voluptatibus dicta porro!"
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .comment-container {
            display: flex;
            border-top: 1px solid black;
            padding-top: 10px;
          }

          img {
            width: 100px;
            height: 100px;
          }

          p {
            font-size: 14px;
          }
        `}
      </style>
    </>
  );
}
