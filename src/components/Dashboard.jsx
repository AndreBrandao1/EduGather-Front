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
          }

          @media screen and (min-width: 768px) {
            .container {
              margin-left: 140px;
            }
          }
        `}
      </style>
    </>
  );
}
