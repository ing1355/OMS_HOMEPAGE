import React from "react";

import "../../css/Products.module.css";
import "../../css/Omface.module.css";
import "../../css/Packagebox.module.css";

import withHead from "../../components/withHead";
import { OMFACE_keywords } from "../../Constants/Keywords";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ClickMenu2 from "../../components/ClickMenu/ClickMenu2";
import SolutionMain from "../../components/Solution/SolutionMain";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Omface() {
  return (
    <>
      <SolutionMain/>
      <ClickMenu2 name="Omface"/>
      <OmfaceSolution/>
    </>
  );
}

function SMain() {
  return (
    <div className="solution-main">
      <div>
        <h1>Products</h1>
      </div>
    </div>
  );
}

function OmfaceSolution() {
  const { t } = useTranslation("common");
  return (
    <li className="omface">
      <div className="omfacetextbox">
        <div className="packageBox-title packageBox-title-omface">
          <div className="packageBox-title-div">
            <ul>
              <li>
                <img
                  className="Solutionimg koImg"
                  src={"/assets/OMFACE1.png"}
                  alt="원모어페이스"
                ></img>
                <img
                  className="Solutionimg enImg"
                  src={"/assets/OMFACE1En.png"}
                  alt="원모어페이스"
                ></img>
              </li>
            </ul>
            <ul>
              <h1 className="omface-h1">{t("원모어페이스")}</h1>
              <h2>{t("딥러닝 기반 얼굴인식 솔루션")}</h2>
              <p>
                {t(
                  "결제, 출입통제 등 얼굴인증 서비스"
                )}
              </p>
            </ul>
          </div>
          <div className="certificationMark">
            <img
              className="koImg"
              src={"/assets/KNBTC.png"}
              alt="한국인터넷진흥원 K-NBTC"
            ></img>
            <img
              className="enImg"
              src={"/assets/KNBTCEn.png"}
              alt="한국인터넷진흥원 K-NBTC"
            ></img>

            <img
              className="koImg"
              src={"/assets/kolas.png"}
              alt="kolas 인증"
            ></img>
            <img
              className="enImg"
              src={"/assets/kolas_en.png"}
              alt="kolas 인증"
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

        {/* <div className="omfacetitle">
          <div>
            <img
              className="Solutionimg koImg"
              src={"/assets/OMFACE1.png"}
              width="210ch"
              alt="원모어페이스"
            ></img>
            <img
              className="Solutionimg enImg"
              src={"/assets/OMFACE1En.png"}
              width="210ch"
              alt="원모어페이스"
            ></img>
          </div>
          <div>
            <h1>{t("원모어페이스")}</h1>
            <h3>{t("딥러닝 기반 얼굴인식 솔루션")}</h3>
            <p>
              {t("한국인터넷진흥원 K-NBTC 기준 99.98%")}{" "}
              <span>{t("(시험횟수ː4,250,000회 기준)")}</span>
            </p>
            <div className="Certificate-img">
              <span>
                <img
                  className="Solutionimg koImg"
                  src={"/assets/KNBTC.png"}
                  alt="한국인터넷진흥원 K-NBTC"
                ></img>
                <img
                  className="Solutionimg enImg"
                  src={"/assets/KNBTCEn.png"}
                  alt="한국인터넷진흥원 K-NBTC"
                ></img>
              </span>
              <span>
                <img
                  className="Solutionimg koImg"
                  src={"/assets/koals.png"}
                  alt="조달청 혁신제품 인증"
                ></img>
                <img
                  className="Solutionimg enImg"
                  src={"/assets/kolas_en.png"}
                  alt="조달청 혁신제품 인증"
                ></img>
              </span>
            </div>
          </div>
        </div> */}

        <div className="scenario">
          <h2>◑ {t("원모어페이스 주요기능(경쟁력)")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/OMFACEimg3.png"}
              alt="원모어페이스 주요기능"
            ></img>
            <img
              className="enImg"
              src={"/assets/OMFACEimg3En.png"}
              alt="원모어페이스 주요기능"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>
            ◑ {t("공인 성능시험 결과")}
            {/* (조명, 포즈, 표정 및 액세서리 변경에 따른 얼굴인식의 정확성) */}
          </h2>
          <div>
            <img
              className="koImg"
              src={"/assets/OMFACEimg1.png"}
              alt="원모어페이스 성능 시험 결과"
            ></img>
            <img
              className="enImg"
              src={"/assets/OMFACEimg1En.png"}
              alt="원모어페이스 성능 시험 결과"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("서비스 응용")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/OMFACEimg2.png"}
              alt="원모어페이스 서비스 응용"
            ></img>
            <img
              className="enImg"
              src={"/assets/OMFACEimg2En.png"}
              alt="원모어페이스 서비스 응용"
            ></img>
          </div>
        </div>

        <div className="brochurebox">
          <h1>Brochure</h1>
          <p>
            <b style={{ color: "#0064ab" }}>{t("원모어페이스")}</b>{" "}
            {t("브로슈어를 PDF로 받아보실 수 있습니다.")}
          </p>

          <a
            className="koBrochure"
            href="/pdf/OMFACE_KR.pdf"
            download
          >
            <button>원모어페이스 다운받기</button>
          </a>
          <a className="koBrochure" href="/pdf/Solution_KR.pdf" download>
            <button>전체 솔루션 다운받기</button>
          </a>

          <a className="enBrochure" href="/pdf/OMFACE_EN.pdf" download>
            <button style={{ textTransform: "capitalize " }}>
              Download OMFACE
            </button>
          </a>
          <a className="enBrochure" href="/pdf/Solution_EN.pdf" download>
            <button style={{ textTransform: "capitalize " }}>
              Download All Solutions
            </button>
          </a>
        </div>
      </div>
    </li>
  );
}

export default withHead(
  Omface,
  "(주)원모어시큐리티 - 원모어페이스",
  "딥러닝 기반 얼굴인식 솔루션.",
  OMFACE_keywords
);
