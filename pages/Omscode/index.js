import React from "react";

import "../../css/Products.module.css";
import "../../css/Omscode.module.css";
import "../../css/Ompass.module.css";
import "../../css/Omeye.module.css";
import "../../css/Packagebox.module.css";

import withHead from "../../components/withHead";
import { OMSCODE_keywords } from "../../Constants/Keywords";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ClickMenu2 from "../../components/ClickMenu/ClickMenu2";
import SolutionMain from "../../components/Solution/SolutionMain";
import Link from "next/link";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Omscode() {
  return (
    <>
      <SolutionMain/>
      <ClickMenu2 name="Omscode"/>
      <OmscodeSolution/>
    </>
  );
}

function OmscodeSolution() {
  const { t } = useTranslation("common");
  return (
    <li className="Omscode">
      <div className="Omscodetextbox">
        <div className="packageBox-title packageBox-title-omscode">
          <div className="packageBox-title-div">
            <ul>
              <li>
                <img
                  className="Solutionimg koImg"
                  src={"/assets/OMSCODE1.png"}
                  alt="오엠에스 코드"
                ></img>
                <img
                  className="Solutionimg enImg"
                  src={"/assets/OMSCODE1En.png"}
                  alt="오엠에스 코드"
                ></img>

              </li>
            </ul>
            <ul>
              <h1 className="omscode-h1">{t("오엠에스 코드")}</h1>
              <h2>{t("문서 위변조 방지 솔루션")}</h2>
              <p>{t("문서 위변조 방지용 2D 바코드·워터마크")}</p>
            </ul>
          </div>
          <div className="certificationMark">
            <img
              className="KoCertifications"
              src={"/assets/TTA.png"}
              alt="TTA"
            ></img>
            <img
              className="EnCertifications"
              src={"/assets/TTAEn.png"}
              alt="TTA"
            ></img>

            <img
              className="KoCertifications"
              src={"/assets/C4.png"}
              alt="벤처나라"
            ></img>
            <img
              className="EnCertifications"
              src={"/assets/C4En.png"}
              alt="벤처나라"
            ></img>

            <img
              className="koImg"
              src={"/assets/C7.png"}
              alt="과기부 장관상 정보보호 유공"
            ></img>
            <img
              className="enImg"
              src={"/assets/C7En.png"}
              alt="과기부 장관상 정보보호 유공"
            ></img>

            <img
              className="koImg"
              src={"/assets/과기정통부수상.png"}
              alt="과기부 장관상 우수기업"
            ></img>
            <img
              className="enImg"
              src={"/assets/과기정통부수상En.png"}
              alt="과기부 장관상 우수기업"
            ></img>

          </div>
        </div>

        {/* <div className="Omscodetitle">
          <div>
            <img
              className="Solutionimg koImg"
              src={"/assets/OMSCODE1.png"}
              width="210ch"
              alt="오엠에스 코드"
            ></img>
            <img
              className="Solutionimg enImg"
              src={"/assets/OMSCODE1En.png"}
              width="210ch"
              alt="오엠에스 코드"
            ></img>
          </div>
          <div>
            <h1>{t("오엠에스 코드")}</h1>
            <h3>{t("문서 위변조 방지 솔루션")}</h3>
            <p>{t("문서 위변조 방지용 2D 바코드·워터마크")}</p>
            <div className="Certificate-img2">
              <span>
                <img
                  className="KoCertifications"
                  src={"/assets/TTA.png"}
                  alt="TTA"
                ></img>{" "}
                <img
                  className="EnCertifications"
                  src={"/assets/TTAEn.png"}
                  alt="TTA"
                ></img>
              </span>

              <span>
                <img
                  className="KoCertifications"
                  src={"/assets/C4.png"}
                  alt="벤처나라"
                ></img>
                <img
                  className="EnCertifications"
                  src={"/assets/C4En.png"}
                  alt="벤처나라"
                ></img>
              </span>
            </div>
          </div>
        </div> */}

        <div className="scenario" id="scenario">
          <h2>◑ {t("오엠에스 코드 응용 시나리오")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/omscodeimg1.png"}
              alt="오엠에스 코드 응용 시나리오"
            ></img>{" "}
            <img
              className="Desktop enImg"
              src={"/assets/omscodeimg1En.png"}
              alt="오엠에스 코드 응용 시나리오"
            ></img>
            {/* <img
              className="KoMobile"
              src={"/assets/omscode1Mobile.png"}
              alt="오엠에스 코드 응용 시나리오"
            ></img>{" "}
            <img
              className="EnMobile"
              src={"/assets/omscode1MobileEn.png"}
              alt="오엠에스 코드 응용 시나리오"
            ></img> */}
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("오엠에스 코드 주요기능(경쟁력)")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/omscodeimg2.png"}
              alt="오엠에스 코드 주요기능"
            ></img>{" "}
            <img
              className="enImg"
              src={"/assets/omscodeimg2En.png"}
              alt="오엠에스 코드 주요기능"
            ></img>
          </div>
        </div>

        <div id="codebox" className="scenario">
          <div>
            <img
              className="koImg"
              src={"/assets/omscodeimg3.png"}
              alt="오엠에스 코드 주요기능"
            ></img>{" "}
            <img
              className="enImg"
              src={"/assets/omscodeimg3En.png"}
              alt="오엠에스 코드 주요기능"
            ></img>
          </div>
        </div>

        <div id="codebox" className="scenario">
          <div>
            <img
              className="koImg"
              src={"/assets/omscodeimg4.png"}
              alt="오엠에스 코드 주요기능"
            ></img>{" "}
            <img
              className="enImg"
              src={"/assets/omscodeimg4En.png"}
              alt="오엠에스 코드 주요기능"
            ></img>
          </div>
        </div>

        <div id="codebox" className="scenario">
          <div>
            <img
              className="koImg"
              src={"/assets/omscodeimg5.png"}
              alt="오엠에스 코드 주요기능"
            ></img>
            <img
              className="enImg"
              src={"/assets/omscodeimg5En.png"}
              alt="오엠에스 코드 주요기능"
            ></img>
          </div>
        </div>

        <div className="brochurebox">
          <h1>Brochure</h1>
          <p>
            <b style={{ color: "#0064ab" }}>{t("오엠에스 코드")}</b>{" "}
            {t("브로슈어를 PDF로 받아보실 수 있습니다.")}
          </p>
          <a
            className="koBrochure"
            href="/pdf/OMSCode_KR.pdf"
            download
          >
            <button>오엠에스 코드 다운받기</button>
          </a>
          <a className="koBrochure" href="/pdf/Solution_KR.pdf" download>
            <button>전체 솔루션 다운받기</button>
          </a>

          <a className="enBrochure" href="/pdf/OMSCode_EN.pdf" download>
            <button>Download OMS Code</button>
          </a>
          <a className="enBrochure" href="/pdf/Solution_EN.pdf" download>
            <button>Download All Solutions</button>
          </a>

          {/* <p>
             <a className="agree-text-ko" href="/ko/privacy-policy" >개인정보처리방침</a>
          </p> */}

            {/* <Link href="/Omscode/privacy-policy" passHref>
              <a className="policy">{t("OMSCodeScanner 앱 서비스 개인정보 처리방침")}</a>
            </Link> */}
          
        </div>
      </div>
    </li>
  );
}

export default withHead(
  Omscode,
  "(주)원모어시큐리티 - 오엠에스 코드",
  "문서 위변조 방지 솔루션.",
  OMSCODE_keywords
);
