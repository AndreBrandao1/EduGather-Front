import "tailwindcss/tailwind.css";
import Head from "next/head";
import { GrLocation } from "react-icons/fa";
import { SideBar } from "@/components/SideBar";
import { Footer } from "@/components/Footer";

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
        /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

        html {
          scroll-behavior: smooth;
        }
        body {
          with: 100vw;
          height: 100vh;
          overflow: hidden;
        }
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          font-family: "Roboto";
        }

        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }

        body {
          line-height: 1;
        }

        ol,
        ul {
          list-style: none;
        }

        blockquote,
        q {
          quotes: none;
        }

        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
      `}
    </style>
  </>
);
export default App;
