import "tailwindcss/tailwind.css";
import Head from "next/head";
import { GrLocation } from "react-icons/fa";
import { SideBar } from "@/components/SideBar";


const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        html,
        body {
          overflow-x: hidden;
        }
        * {
          font-family: "Roboto", sans-serif;
        }
      `}
    </style>
  </>
);
export default App;
