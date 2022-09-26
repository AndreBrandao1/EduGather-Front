import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "@/hooks/auth";
import {
  faCog,
  faHeart,
  faSignOutAlt,
  faTachometerAlt,
  faUser,
  faPenToSquare,
  faAddressCard,
  faQuestion,
  faA,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function LeftNavbar({ onClick, onClick2, onClick3, onClick4, onClick5 }) {
  const { user, logout } = useAuth();
  return (
    <>
      <div className="navcontainer">
        <div className="logo">
          <h2>EduGather</h2>
        </div>
        <div className="wrapper">
          <ul>
            {/* first link  */}
            <li>
              <FontAwesomeIcon
                icon={faTachometerAlt}
                style={{ width: "18px", cursor: "pointer" }}
              />
              <div className="link">
                <Link href="/dashboard">Dashboard</Link>
              </div>
            </li>
            {/* second link */}
            <li>
              {user?.role == "admin" && (
                <>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ width: "18px", cursor: "pointer" }}
                  />
                  <div className="link">
                    <Link href="/dashboard/manageTrainers">
                      Manage Trainers
                    </Link>
                  </div>
                </>
              )}
              {user?.role == "trainer" && (
                <>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ width: "18px", cursor: "pointer" }}
                  />
                  <div className="link">
                    <Link href="/dashboard/profile">Profile</Link>
                  </div>
                </>
              )}
              {user?.role == "trainee" && (
                <>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ width: "18px", cursor: "pointer" }}
                  />
                  <div className="link">
                    <Link href="/dashboard/profile">Profile</Link>
                  </div>
                </>
              )}
            </li>
            {/* third link */}
            <li>
              {user?.role == "admin" && (
                <>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ width: "18px", cursor: "pointer" }}
                  />
                  <div className="link">
                    <Link href="/dashboard/manageCourses">Manage Courses</Link>
                  </div>
                </>
              )}
              {user?.role == "trainer" && (
                <>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ width: "18px", cursor: "pointer" }}
                  />
                  <div className="link">
                    <Link href="/dashboard/manageCourses">My Courses</Link>
                  </div>
                </>
              )}
              {user?.role == "trainee" && (
                <>
                  <FontAwesomeIcon
                    icon={faQuestion}
                    style={{ width: "18px", cursor: "pointer" }}
                  />
                  <div className="link">
                    <Link href="/dashboard/manageRequests">
                      Manage Requests
                    </Link>
                  </div>
                </>
              )}
            </li>

            {/* fourth link */}
            <li>
              {user?.role == "admin" && (
                <>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ width: "18px", cursor: "pointer" }}
                  />
                  <div className="link">
                    <Link href="/dashboard/manageTrainers">
                      Manage Trainers
                    </Link>
                  </div>
                </>
              )}
              {user?.role == "trainer" && (
                <>
                  <FontAwesomeIcon
                    icon={faQuestion}
                    style={{ width: "18px", cursor: "pointer" }}
                  />
                  <div className="link">
                    <Link href="/dashboard/manageRequests">
                      Manage Requests
                    </Link>
                  </div>
                </>
              )}
              {user?.role == "trainee" && (
                <>
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    style={{ width: "18px", cursor: "pointer" }}
                  />
                  <div className="link">
                    <Link href="/dashboard/students">Contacts</Link>
                  </div>
                </>
              )}
            </li>
            {/* fifth link */}
            <li>
              <FontAwesomeIcon
                icon={faCog}
                style={{ width: "18px", cursor: "pointer" }}
              />
              <div className="link">
                <Link href="/dashboard/myCouses">Settings</Link>
              </div>
            </li>

            {/* LogOut */}
            <li>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ width: "18px", cursor: "pointer" }}
              />
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
            color: white;
            position: fixed;
            width: 70px;
            height: 100%;
            background: linear-gradient(
              180deg,
              rgba(255, 134, 7, 1) 44%,
              rgba(173, 0, 255, 1) 94%
            );
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
            white-space: nowrap;
            opacity: 0;
          }

          .wrapper > ul > li {
            display: flex;
            flex-direction: column;
            justify-content: center;
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

            .wrapper > ul > li {
              flex-direction: row;
              justify-content: unset;
              align-items: center;
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
              opacity: 1;
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
