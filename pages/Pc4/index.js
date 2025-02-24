import React from "react";

import "../../css/Products.module.css";
import "../../css/Pc4.module.css";
import "../../css/Ompass.module.css";
import "../../css/Packagebox.module.css";
import "../../css/Omeye.module.css";

import withHead from "../../components/withHead";
import { PC4_keywords } from "../../Constants/Keywords";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ClickMenu2 from "../../components/ClickMenu/ClickMenu2";
import SolutionMain from "../../components/Solution/SolutionMain";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Pc4() {
  return (
    <>
      <SolutionMain/>
      <ClickMenu2 name="Pc4"> </ClickMenu2>
      <Pc4Solution></Pc4Solution>
    </>
  );
}

function Pc4Solution() {
  const { t } = useTranslation("common");
  return (
    <li className="pc4">
      <div className="pc4textbox">
        <div className="packageBox-title packageBox-title-MyPCProtector">
          <div className="packageBox-title-div">
            <ul>
              <li>
                <img
                  className="Solutionimg koImg"
                  src={"/assets/PC1.png"}
                  alt="내PC지키미 4.0"
                ></img>
                <img
                  className="Solutionimg enImg"
                  src={"/assets/PC1En.png"}
                  alt="내PC지키미 4.0"
                ></img>
              </li>
            </ul>
            <ul>
              <h1 className="MyPCProtector-h1">{t("내PC지키미 4.0")}</h1>
              <h2>{t("PC 보안 취약점 진단 및 조치 솔루션")}</h2>
              <p>{t("원클릭 진단 및 조치")}</p>

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
              src={"/assets/C1.png"}
              alt="중소벤처기업부 비대면바우처 공급 제품"
            ></img>
            <img
              className="EnCertifications"
              src={"/assets/C1En.png"}
              alt="중소벤처기업부 비대면바우처 공급 제품"
            ></img>

            <img
              className="KoCertifications"
              src={"/assets/C5.png"}
              alt="조달청 나라장터"
            ></img>
            <img
              className="EnCertifications"
              src={"/assets/C5En.png"}
              alt="조달청 나라장터"
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

        {/* <div className="pc4title">
          <div>
            <img
              className="Solutionimg koImg"
              src={"/assets/PC1.png"}
              width="210ch"
              alt="내PC지키미 4.0"
            ></img>{" "}
            <img
              className="Solutionimg enImg"
              src={"/assets/PC1En.png"}
              width="210ch"
              alt="내PC지키미 4.0"
            ></img>
          </div>
          <div>
            <h1>{t("내PC지키미 4.0")}</h1>
            <h3>
              {t("PC 보안 취약점 진단 및 ")}
              <h4>{t("조치 솔루션")}</h4>
            </h3>
            <p>{t("원클릭 진단 및 조치")}</p>
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
                  src={"/assets/C1.png"}
                  alt="중소벤처기업부 비대면바우처 공급 제품"
                ></img>{" "}
                <img
                  className="EnCertifications"
                  src={"/assets/C1En.png"}
                  alt="중소벤처기업부 비대면바우처 공급 제품"
                ></img>{" "}
              </span>
              <span>
                <img
                  className="KoCertifications"
                  src={"/assets/C5.png"}
                  alt="조달청 나라장터"
                ></img>
                <img
                  className="EnCertifications"
                  src={"/assets/C5En.png"}
                  alt="조달청 나라장터"
                ></img>
              </span>
            </div>
          </div>
        </div> */}

        <div className="scenario" id="needs">
          <h2>◑ {t("내PC지키미 4.0")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/pcimg1.png"}
              alt="내PC지키미 4.0 시나리오"
            ></img>{" "}
            <img
              className="Desktop enImg"
              src={"/assets/pcimg1En.png"}
              alt="내PC지키미 4.0 시나리오"
            ></img>
            {/* <img
              className="KoMobile"
              src={"/assets/pc1Mobile.png"}
              alt="내PC지키미 4.0 시나리오"
            ></img>
            <img
              className="EnMobile"
              src={"/assets/pc1MobileEn.png"}
              alt="내PC지키미 4.0 시나리오"
            ></img> */}
          </div>
        </div>

        <div className="scenario" id="scenario">
          <h2>◑ {t("내PC지키미 4.0 특장점")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/pcimg2.png"}
              alt="내PC지키미 4.0 특장점"
            ></img>
            <img
              className="Desktop enImg"
              src={"/assets/pcimg2En.png"}
              alt="내PC지키미 4.0 특장점"
            ></img>
            {/* <img
              className="KoMobile"
              src={"/assets/pc2Mobile.png"}
              alt="내PC지키미 4.0 특장점"
            ></img>{" "}
            <img
              className="EnMobile"
              src={"/assets/pc2MobileEn.png"}
              alt="내PC지키미 4.0 특장점"
            ></img> */}
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("내PC지키미 주요화면")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/pcimg3.png"}
              alt="내PC지키미 4.0 주요화면"
            ></img>
            <img
              className="enImg"
              src={"/assets/pcimg3En.png"}
              alt="내PC지키미 4.0 주요화면"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("내PC지키미 주요기능(경쟁력)")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/pcimg4.png"}
              alt="내PC지키미 4.0 주요기능"
            ></img>{" "}
            <img
              className="enImg"
              src={"/assets/pcimg4En.png"}
              alt="내PC지키미 4.0 주요기능"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("내PC지키미 4.0 서비스 구성도")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/pcimg5.png"}
              alt="내PC지키미 4.0 서비스 구성도"
            ></img>
            <img
              className="Desktop enImg"
              src={"/assets/pcimg5En.png"}
              alt="내PC지키미 4.0 서비스 구성도"
            ></img>
            {/* <img
              className="KoMobile"
              src={"/assets/pc3Mobile.png"}
              alt="내PC지키미 4.0 서비스 구성도"
            ></img>{" "}
            <img
              className="EnMobile"
              src={"/assets/pc3MobileEn.png"}
              alt="내PC지키미 4.0 서비스 구성도"
            ></img> */}
          </div>
        </div>

        <div className="brochurebox">
          <h1>Brochure</h1>
          <p>
            <b style={{ color: "#0064ab" }}>{t("내PC지키미 4.0")}</b>{" "}
            {t("브로슈어를 PDF로 받아보실 수 있습니다.")}
          </p>

          <a
            className="koBrochure"
            href="/pdf/MyPCProtector_KR.pdf"
            download
          >
            <button>내PC지키미 4.0 다운받기</button>
          </a>
          <a className="koBrochure" href="/pdf/Solution_KR.pdf" download>
            <button>전체 솔루션 다운받기</button>
          </a>

          <a
            className="enBrochure"
            href="/pdf/MyPCProtector_EN.pdf"
            download
          >
            <button style={{ textTransform: "capitalize " }}>
              {t("Download MyPCProtector")}
            </button>
          </a>
          <a className="enBrochure" href="/pdf/Solution_EN.pdf" download>
            <button style={{ textTransform: "capitalize " }}>
              {t("Download All Solutions")}
            </button>
          </a>
        </div>
        {/* <div className="pay-box ds">
          <h1>{t("조달청 디지털서비스몰")}</h1>
          <a
            href={
              "https://digitalmall.g2b.go.kr:8058/dm/pp/goods/selectGoodsNewLst.do?ctgrDivCd=&hsrchYn=Y&hsrchSeCd=04&hsrchwd=%BF%C0%BF%A5%BF%A1%BD%BA"
            }
            target="_blank"
          >
            <button> {t("상품 보러가기")}</button>
          </a>
          <img
            className="bg koImg"
            src={""}
          ></img>
          <img
            className="bg enImg"
            src={""}
          ></img>
        </div> */}
      </div>
    </li>
  );
}

export default withHead(
  Pc4,
  "(주)원모어시큐리티 - 내PC지키미 4.0",
  "PC 보안 취약점 진단 및 조치 솔루션.",
  PC4_keywords
);
