import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Top from "./Top";

const Layout = (props) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-next-line
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-PN7N8YXEQB", {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
      <Top />
    </>
  );
};

export default Layout;
