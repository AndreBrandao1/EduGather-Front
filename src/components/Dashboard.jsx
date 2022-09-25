import Header from "@/components/Header";
import LeftNavbar from "@/components/LeftNavbar";

import { Children } from "react";

export function Dashboard({ children }) {
  return (
    <>
      <LeftNavbar />
      <Header />
      <div className="container">{children}</div>
      <style jsx>
        {`
          .container {
            width: 100vw;
            margin-left: 100px;
          }

          @media screen and (min-width: 768px) {
            .container {
              width: 80%;
              margin-left: 250px;
            }
          }
        `}
      </style>
    </>
  );
}
