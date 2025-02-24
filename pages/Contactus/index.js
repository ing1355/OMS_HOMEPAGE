import React from "react";
import "../../css/Contactus.module.css";
import Directions from "../../components/Contactus/Directions";
import withHead from "../../components/withHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ClickMenu3 from "../../components/ClickMenu/ClickMenu3";

export const getStaticProps = async ({ locale }) => ({
  // console.log("locale : ", locale);

  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
function Contactus() {
  return (
    <>
      <Cmain></Cmain>
      <ClickMenu3 msg="오시는길"></ClickMenu3>
      <Directions></Directions>
    </>
  );
}

function Cmain() {
  return (
    <div className="contactus-main">
      <div>
        <h1>Contact Us</h1>
      </div>
    </div>
  );
}

export default withHead(
  Contactus,
  "(주)원모어시큐리티 - 오시는 길",
  "찾아 오시는 길"
);
