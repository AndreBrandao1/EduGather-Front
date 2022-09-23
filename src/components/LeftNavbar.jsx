import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "@/hooks/auth";
import {
  faBookOpen,
  faCog,
  faHeart,
  faRocket,
  faSignOutAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function LeftNavbar({ onClick, onClick2, onClick3, onClick4, onClick5 }) {
  const { logout } = useAuth();
  return (
    <>
      <div className="navcontainer">
        <div className="logo">
          <h2>EduGather</h2>
        </div>
        <div className="wrapper">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faTachometerAlt}
                style={{ width: "18px", cursor: "pointer" }}
              />
              <div className="link">
                <Link href="/dashboard">Dashboard</Link>
              </div>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faRocket}
                style={{ width: "18px", cursor: "pointer" }}
              />
              <div className="link">
                <Link href="/dashboard/profile">Profile</Link>
              </div>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faBookOpen}
                style={{ width: "18px", cursor: "pointer" }}
              />
              <div className="link">
                <Link href="/dashboard/myCouses">My Courses</Link>
              </div>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
              <div className="link">
                <Link href="/dashboard/students">Students</Link>
              </div>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCog}
                style={{ width: "18px", cursor: "pointer" }}
              />
              <div className="link">
                <Link href="/dashboard/myCouses">Settings</Link>
              </div>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
              <a onClick={logout} href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          .navcontainer {
            position: fixed;
            width: 70px;
            height: 100%;
            background-color: #fff;
            box-shadow: 3px 0px 6px 0px rgba(246, 246, 246, 0.75);
          }

          .wrapper {
            padding: 10px;
            z-index: 1;
          }

          .logo {
            background: url("logo.png");
            width: 40px;
            height: 40px;
            padding: 10px;
            margin: 10px;
          }

          .logo > h2 {
            opacity: 0;
          }

          .wrapper > ul {
            margin-top: 20px;
            text-align: left;
            padding-left: 10px;
            display: flex;
            gap: 5px;
            flex-direction: column;
            font-size: 18px;
            font-weight: bold;
          }
          .link {
            opacity: 0;
          }
          .wrapper > ul > li:hover {
            color: purple;
          }
          .wrapper > ul > li:focus {
            backgroud-color: purple;
          }
          .wrapper > ul > li > a {
            opacity: 0;
          }

          .wrapper > ul > li:active {
            color: #000;
          }

          @media screen and (min-width: 768px) {
            .navcontainer {
              width: 200px;
            }

            .wrapper > ul > li > a {
              opacity: 1;
            }

            .wrapper > ul > li:hover {
              color: unset;
            }

            .link {
              opacity: 1;
            }
            .logo {
              background-image: none;
              padding: 10px;
              padding-left: 20px;
              text-align: left;
              font-size: 20px;
              font-weight: bold;
            }

            .logo > h2 {
              opacity: 1;
            }

            .wrapper > ul {
              gap: 25px;
            }

            .wrapper > ul > li {
              display: flex;
              gap: 10px;
              list-style: none;
              font-size: 18px;
              text-decoration: none;
              opacity: 0.6;
            }

            .wrapper > ul > li > a:hover {
              color: darkgoldenrod;
              font-size: 22px;
              transition: 0.2s;
            }
          }
        `}
      </style>
    </>
  );
}

export default LeftNavbar;
