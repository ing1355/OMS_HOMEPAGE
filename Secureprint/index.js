import React from "react";

import "../../css/Products.module.css";
import "../../css/Secureprint.module.css";
import "../../css/Ompass.module.css";
import "../../css/Packagebox.module.css";

import withHead from "../components/withHead";
import { SECUREPRINT_keywords } from "../Constants/Keywords";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ClickMenu2 from "../components/ClickMenu/ClickMenu2";
import SolutionMain from "../components/Solution/SolutionMain";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Secureprint() {
  return (
    <>
      <SolutionMain/>
      <ClickMenu2 name="Secureprint"> </ClickMenu2>
      <SecureprintSolution></SecureprintSolution>
    </>
  );
}

function SecureprintSolution() {
  const { t } = useTranslation("common");
  return (
    <li className="Secureprint">
      <div className="Secureprinttextbox">
        <div className="packageBox-title packageBox-title-SecurePrint">
          <div className="packageBox-title-div">
            <ul>
              <li>
                <img
                  className="Solutionimg koImg"
                  src={"/assets/SECUREPRINT1.png"}
                  alt="오엠에스 시큐어 프린트"
                ></img>
                <img
                  className="Solutionimg enImg"
                  src={"/assets/SECUREPRINT1En.png"}
                  alt="오엠에스 시큐어 프린트"
                ></img>
              </li>
            </ul>
            <ul>
              <h1 className="SecurePrint-h1">{t("오엠에스 시큐어 프린트")}</h1>
              <h2>{t("출력 제어 솔루션")}</h2>
              <p>{t("개인정보 보호 및 데이터 유출 방지를 위한 추적관리")}</p>
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
              className="KoCertifications"
              src={"/assets/C1.png"}
              alt="중소벤처기업부 비대면바우처 공급 제품"
            ></img>
            <img
              className="EnCertifications"
              src={"/assets/C1En.png"}
              alt="중소벤처기업부 비대면바우처 공급 제품"
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

        <div className="Secureprinttitle">
          <div>
            <img
              className="Solutionimg koImg"
              src={"/assets/SECUREPRINT1.png"}
              width="210ch"
              alt="오엠에스 시큐어 프린트"
            ></img>
            <img
              className="Solutionimg enImg"
              src={"/assets/SECUREPRINT1En.png"}
              width="210ch"
              alt="오엠에스 시큐어 프린트"
            ></img>
          </div>
          <div>
            <h1>{t("오엠에스 시큐어 프린트")}</h1>
            <h3>{t("출력 제어 솔루션")}</h3>
            <p>{t("개인정보 보호 및 데이터 유출 방지를 위한 추적관리")}</p>
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

              <span>
                <img
                  className="KoCertifications"
                  src={"/assets/C1.png"}
                  alt="중소벤처기업무 비대면바우처 공급 제품"
                ></img>{" "}
                <img
                  className="EnCertifications"
                  src={"/assets/C1En.png"}
                  alt="중소벤처기업무 비대면바우처 공급 제품"
                ></img>
              </span>
            </div>
          </div>
        </div> 

        <div className="scenario" id="scenario">
          <h2>◑ {t("오엠에스 시큐어 프린트 특장점")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/secureprintimg1.png"}
              alt="오엠에스 시큐어 프린트 특장점"
            ></img>{" "}
            <img
              className="Desktop enImg"
              src={"/assets/secureprintimg1En.png"}
              alt="오엠에스 시큐어 프린트 특장점"
            ></img>
             <img
              className="KoMobile"
              src={"/assets/secure1Mobile.png"}
              alt="오엠에스 시큐어 프린트 특장점"
            ></img>
            <img
              className="EnMobile"
              src={"/assets/secure1MobileEn.png"}
              alt="오엠에스 시큐어 프린트 특장점"
            ></img> 
          </div>
        </div>

        <div className="scenario" id="scenario">
          <h2>◑ {t("오엠에스 시큐어 프린트 주요기능(경쟁력)")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/secureprintimg2.png"}
              alt="오엠에스 시큐어 프린트 주요기능"
            ></img>
            <img
              className="Desktop enImg"
              src={"/assets/secureprintimg2En.png"}
              alt="오엠에스 시큐어 프린트 주요기능"
            ></img>
            <img
              className="KoMobile"
              src={"/assets/secure2Mobile.png"}
              alt="오엠에스 시큐어 프린트 주요기능"
            ></img>{" "}
            <img
              className="EnMobile"
              src={"/assets/secure2MobileEn.png"}
              alt="오엠에스 시큐어 프린트 주요기능"
            ></img> 
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("오엠에스 시큐어 프린트 서비스 구성도")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/secureprintimg3.png"}
              alt="오엠에스 시큐어 프린트 서비스 구성도"
            ></img>
            <img
              className="Desktop enImg"
              src={"/assets/secureprintimg3En.png"}
              alt="오엠에스 시큐어 프린트 서비스 구성도"
            ></img>
             <img
              className="KoMobile"
              src={"/assets/secure3Mobile.png"}
              alt="오엠에스 시큐어 프린트 서비스 구성도"
            ></img>
            <img
              className="EnMobile"
              src={"/assets/secure3MobileEn.png"}
              alt="오엠에스 시큐어 프린트 서비스 구성도"
            ></img> 
          </div>
        </div>
        <div className="brochurebox">
          <h1>Brochure</h1>
          <p>
            <b style={{ color: "#0064ab" }}>{t("오엠에스 시큐어 프린트")}</b>{" "}
            {t("브로슈어를 PDF로 받아보실 수 있습니다.")}
          </p>

          <a
            className="koBrochure"
            href="/pdf/시큐어프린트 브로슈어.pdf"
            download
          >
            <button>시큐어프린트 다운받기</button>
          </a>
          <a className="koBrochure" href="/pdf/Solution_KR.pdf" download>
            <button>전체 솔루션 다운받기</button>
          </a>

          <a
            className="enBrochure"
            href="/pdf/OMS Secure Print_Brochure.pdf"
            download
          >
            <button>Download Secure Print</button>
          </a>
          <a className="enBrochure" href="/pdf/Solution_EN.pdf" download>
            <button>Download All Solutions</button>
          </a>
        </div>

        <div className="pay-box2">
          <h1>{t("조달청 벤처나라")}</h1>

          <a
            href={
              "https://venture.g2b.go.kr:8321/vn/product/selectProductDtl.do?detailProductNm=%BA%B8%BE%C8%BC%D2%C7%C1%C6%AE%BF%FE%BE%EE&detailProductNo=4323320501&prdctIdntNo=24008496&srchValue=???????&upCtgrNo=SEARCH&vntrCorpDprmsOrd=1&vntrCorpDprmsReqSno=10&vntrCorpNm=%C1%D6%BD%C4%C8%B8%BB%E7+%BF%F8%B8%F0%BE%EE%BD%C3%C5%A5%B8%AE%C6%BC&vntrCorpNo=CN0100000626923"
            }
            target="_blank"
          >
            <button> {t("상품 보러가기")} </button>
          </a>

          <img
            className="bg koImg"
            src={"/assets/pps-bg2.png"}
          ></img>
          <img
            className="bg enImg"
            src={"/assets/pps-bgen2.png"}
          ></img>
        </div>
      </div>
    </li>
  );
}

export default withHead(
  Secureprint,
  "(주)원모어시큐리티 - 시큐어프린트",
  "출력 제어 솔루션.",
  SECUREPRINT_keywords
);