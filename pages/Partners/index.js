import React from "react";
import "../../css/Contactus.module.css";
import "../../css/Partners.css";
import PartnerList from "../../components/Partners/PartnerList";
import withHead from "../../components/withHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ClickMenu3 from "../../components/ClickMenu/ClickMenu3";

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
});

function Partner() {
    return (
        <>
        <Cmain/>
        <ClickMenu3 msg="주요 고객 및 국내외 파트너사"/>
        <PartnerList/>
        </>
    );
}

function Cmain() {
  return (
    <div className="contactus-main partner">
      <div>
        <h1>Partners</h1>
      </div>
    </div>
  );
}

  export default withHead(
    Partner,
    "(주)원모어시큐리티 - 주요 고객사 및 국내외 파트너사",
    "세계 최고의 보안기술을 제공하는 ˝글로벌 보안 유니콘기업˝을 목표로 달려가겠습니다."
  );
  