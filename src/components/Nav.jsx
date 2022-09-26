import React from "react";
import { useAuth } from "@/hooks/auth";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export function Nav() {
  const user = useAuth();
  return (
    <>
      <div className="navContainer">
        <img className="logo" src="/logo.png" />
        <div className="links">
          <ul>
            <li>Home</li>
          </ul>
          <div>
            {user ? <Link href="#">LogOut</Link> : <Link href="#">LogIn</Link>}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logo {
            max-width: 150px;
            height: auto;
          }
          .navContainer {
            height: 70px;
            width: 100vw;
            background-color: #022444;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}
