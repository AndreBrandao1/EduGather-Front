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
        <div className="links">
          <ul>
            <li>Home</li>
          </ul>
          <div>{user ? <Link>LogOut</Link> : <Link>LogIn</Link>}</div>
        </div>
      </div>
      <style jsx>
        {`
          .navContainer {
            height: 80px;
            width: 100vw;
            backgroud-color: #022444;
          }
        `}
      </style>
    </>
  );
}
