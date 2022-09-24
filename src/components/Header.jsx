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
            width: 100vw;
            display: flex;
            flex-wrap: wrap;
            height: 70px;
            background: linear-gradient(
              90deg,
              rgba(255, 134, 7, 1) 44%,
              rgba(173, 0, 255, 1) 94%
            );
            padding-left: 70px;
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
            color: white;
          }
          .title > p {
            color: rgb(0, 0, 0);
            color: white;
          }
          .title > h2 > span {
            color: purple;
            font-weight: bold;
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
              width: 100vw;
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
