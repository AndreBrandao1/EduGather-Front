import "tailwindcss/tailwind.css";
import Head from "next/head";
import { GrLocation } from "react-icons/fa";
import { SideBar } from "@/components/SideBar";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;600;700&family=Roboto:wght@100;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Component {...pageProps} />
    <style jsx>
      {`
        * {
          font-family: "Roboto", sans-serif;
        }

        nav {
          height: 80px;
          background-color: rgba(0, 0, 0, 0);
          color: white;
          font-size: 40px;
          position: fixed;
          z-index: 5;
        }

        .test {
          display: flex;
          justify-content: flex-end;
        }
      `}
    </style>
  </>
);
export default App;
