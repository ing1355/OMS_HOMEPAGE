import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import "../css/Footer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { appWithTranslation } from "next-i18next";

const notLayoutRoutes = ["/Login", "/Newstext"];

function MyApp(props) {
  const { Component, pageProps, router } = props;
  
  return (
    <>
      <Head>
        <link href="https://omsecurity.kr/" rel="canonical" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/logo-mobile.png"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-site-verification"
          content="DeJCu8c6VyIEoVOqjeYm_YNQ9JHoFUA56dZsoIwc2ws"
        />

        <meta
          name="naver-site-verification"
          content="683eeab11cc2c9065e7b1ac7f3ee20ccff632225"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PN7N8YXEQB"
        ></script>
        
      </Head>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Noto Sans KR", sans-serif;
            color: #272727;
          }
          html {
            height: 100%;
          }
          body {
            margin: 0 auto;
            height: 100%;
            background-color: #d4d4d4 !important;
          }
          #__next {
            height: 100%;
          }
          ul,
          li {
            padding-left: 0;
            list-style: none;
          }
        `}
      </style>

      {!notLayoutRoutes.includes(router.route) ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default appWithTranslation(MyApp);
