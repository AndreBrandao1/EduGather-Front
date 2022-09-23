import React from "react";
import { useAuth } from "@/hooks/auth";
import { userAgent } from "next/server";

function Header() {
  const user = useAuth();

  return (
    <>
      <div className="headContainer">
        <div className="headWrapper">
          <div className="title">
            <h2>
              Hello, <span>{user.user?.first_name}</span>
            </h2>
            <p>welcome to the your dashboard.</p>
          </div>
          <div className="profile">
            <img src="/watermark.png" alt="profile" className="profileImage" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          * {
            box-sizing: border-box;
          }
          .headContainer {
            display: flex;
            flex-wrap: wrap;
            height: 70px;
            background-color: rgb(255, 255, 255);
            width: 100vw;
            padding-left: 70px;
            border-bottom: 1px solid black;
            /* z-index: -1; */
          }
          .headWrapper {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }

          .title {
            margin-left: 40px;
          }
          .title > h2 {
            color: rgb(0, 0, 0);
          }
          .title > p {
            color: rgb(0, 0, 0);
          }
          .title > h2 > span {
            color: rgb(9, 112, 72);
          }
          .profile {
            position: absolute;
            right: 5px;
          }
          .profileImage {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
          }

          @media only screen and (min-width: 768px) {
            .headContainer {
              padding-left: 200px;
              width: 80vw;
            }
            .profile {
              position: absolute;
              right: 20px;
            }
          }
        `}
      </style>
    </>
  );
}

export default Header;
