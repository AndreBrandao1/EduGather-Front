import React from "react";
import { useAuth } from "@/hooks/auth";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faHome,
  faRightFromBracket,
  faSign,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Nav() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [slideDisplay, setSideDisplay] = useState("block");
  console.log(slideDisplay);

  return (
    <>
      <div className="navContainer">
        <img className="logo" src="/logo.png" />
        <div className="links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            {user ? (
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div className="buttons">
            {user ? (
              <button onClick={logout}>LogOut</button>
            ) : (
              <button>
                <a href="/login">LogIn</a>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="sideBar">
        <button
          type="button"
          className="toggle"
          onClick={() => {
            setIsOpen(!isOpen);
            setSideDisplay("none");
          }}
        >
          &#9776;
        </button>
        <div
          className="content-container"
          style={
            isOpen
              ? {
                  width: "100vw",
                  height: "100vh",
                }
              : {
                  width: "0px",
                  height: "0px",
                }
          }
        >
          <div className="content">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setSideDisplay("block");
              }}
            >
              X
            </button>
            <a className="navLinks" href="/">
              <FontAwesomeIcon icon={faHome} width={20} height={20} />{" "}
              <span>Home</span>
            </a>
            <a className="navLinks" href="/dashboard">
              <FontAwesomeIcon icon={faGauge} width={20} height={20} />{" "}
              <span>Dashboard</span>
            </a>
            <a className="navLinks">
              {user ? (
                <>
                  <FontAwesomeIcon icon={faSignOut} width={20} height={20} />
                  <span onClick={logout}>LogOut</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faSign} width={20} height={20} />
                  <span>
                    <a href="/login">LogIn</a>
                  </span>
                </>
              )}
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          ul {
            display: flex;
            gap: 25px;
          }

          li {
            list-decoration: none;
          }
          a {
            text-decoration: none;
            transition: all 0.2s ease;
            font-weight: 400;
          }
          a:hover {
            color: #f27d42;
            cursor: pointer;
          }
          .buttons {
            border: 4px solid #f27d42;
            border-radius: 25px;
            padding: 5px 10px;
            color: #f27d42;
            transition: all 0.2s ease;
            font-weight: 600;
          }

          .buttons:hover {
            color: white;
            background-color: #f27d42;
          }
          .logo {
            max-width: 150px;
            height: auto;
            cursor: pointer;
          }

          .links {
            display: none;
          }

          .navContainer {
            height: 80px;
            width: 100%;
            background-color: #022444;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            position: fixed;
            z-index: 5;
          }

           {
            /* SideBar */
          }

          .sideBar {
            position: fixed;
            z-index: 10;
            right: 20px;
            font-size: 30px;
          }
          .toggle {
            border: unset;
            width: 100%;
            border-top-left-radius: 15px;
            color: #f27d42;
            display: ${slideDisplay};
            padding: 5px 5px 0 5px;
            display: flex;
            align-items: center;
            padding-top: 15px;
          }
          .content {
            padding: 20px 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: white;
            transition: width ease 0.3s;
            padding-left: 40px;
          }

          .content button {
            color: red;
            right: 20px;
          }

          .navLinks {
            font-weight: bold;
            font-size: 20px;
            color: #f27d42;
            display: flex;
            gap: 10px;
          }

          .navLinks span {
            color: white;
          }
          .content-container {
            overflow: hidden;
            transition: width ease 0.3s;
            background-color: #022444;
            transition: ease 0.3s;
            z-index: 5;
          }

          @media screen and (min-width: 768px) {
            .sideBar {
              display: none;
              transition: all 0.2s ease;
            }

            .links {
              display: flex;
              gap: 30px;
              font-size: 20px;
              align-items: center;
              text-decoration: none;
              transition: all 0.2s ease;
            }

            .navContainer {
              position: absolute;
            }
          }
        `}
      </style>
    </>
  );
}
