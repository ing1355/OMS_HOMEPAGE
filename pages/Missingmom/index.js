import React, { useEffect } from "react";
import $ from "jquery";
import "../../css/Products.module.css";
import "../../css/Packagebox.module.css";
import "../../css/Omeye.module.css";
import "../../css/Missingmom.module.css";

import withHead from "../../components/withHead";
import { MISSINGMOM_keywords } from "../../Constants/Keywords";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ClickMenu2 from "../../components/ClickMenu/ClickMenu2";
import SolutionMain from "../../components/Solution/SolutionMain";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Missingmom() {
  return (
    <>
      <SolutionMain/>
      <ClickMenu2 name="Missingmom"> </ClickMenu2>
      <MissingmomSolution></MissingmomSolution>
    </>
  );
}

function MissingmomSolution() {
  useEffect(() => {
    $(function () {
      $(".packageBox-videoButton").click(function () {
        var offset = $(".missingmom .iframe").offset();
        $("html, body").animate({ scrollTop: offset.top }, 0);
      });
    });
  });

  const { t } = useTranslation("common");
  return (
    <li className="missingmom">
      <div className="missingmomtextbox">
        <div className="packageBox-title packageBox-title-missingmom">
          <div className="packageBox-title-div">
            <ul>
              <li>
                <img
                  className="Solutionimg koImg"
                  src={"/assets/MISSINGMOM1.png"}
                  alt="미씽맘"
                ></img>
                <img
                  className="Solutionimg enImg"
                  src={"/assets/MISSINGMOM1En.png"}
                  alt="미씽맘"
                ></img>
              </li>
            </ul>
            <ul>
              <h1 className="missingmom-h1">{t("미씽맘")}</h1>
              <h2>{t("미아·치매노인 찾기를 위한 시민 참여형 서비스")}</h2>
              <p>{t("스마트폰·키오스크를 통한 실종자 찾기 간편신고 서비스 제공")}</p>

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
              src={"/assets/C6.png"}
              alt="조달청 혁신제품 인증"
            ></img>
            <img
              className="enImg"
              src={"/assets/C6En.png"}
              alt="조달청 혁신제품 인증"
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
          {/* <div className="packageBox-title-div">
            <ul>
              <button className="packageBox-videoButton">
                {t("소개 영상 보기")}
                <img
                  src={"/assets/playCircle.png"}
                ></img>
              </button>
            </ul>
          </div> */}
        </div>

        <div className="scenario iframe omeyeVideo">
          <h2>◑ {t("미씽맘 소개 영상")}</h2>
          <div>
            <iframe
              className="koVideo"
              style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
              src="https://www.youtube.com/embed/D4Oz_b7OjLM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              className="enVideo"
              style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
              src="https://www.youtube.com/embed/CbekUlK8u4o "
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        
        <div className="scenario ">
          <h2>◑ {t("미아·치매노인 찾기를 위한 시민 참여형 서비스의 도입 필요성")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/missingmomimg2.png"}
              alt="미씽맘 필요성"
            ></img>
            <img
              className="enImg"
              src={"/assets/missingmomimg2En.png"}
              alt="미씽맘 필요성"
            ></img>
          </div>
        </div>
        <div className="scenario" id="scenario">
          <h2>◑ {t("미씽맘 주요기능(경쟁력)")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/missingmomimg1.png"}
              alt="미씽맘 주요기능"
            ></img>
            <img
              className="enImg"
              src={"/assets/missingmomimg1En.png"}
              alt="미씽맘 주요기능"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <h2>◑ {t("미씽맘 운영 시나리오：가족")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/missingmomimg3.png"}
              alt="미씽맘 운영 시나리오：가족"
            ></img>
            <img
              className="enImg"
              src={"/assets/missingmomimg3En.png"}
              alt="미씽맘 운영 시나리오：가족"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <h2>◑ {t("미씽맘 운영 시나리오：발견자")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/missingmomimg3_1.png"}
              alt="미씽맘 운영 시나리오：발견자"
            ></img>
            <img
              className="enImg"
              src={"/assets/missingmomimg3En_1.png"}
              alt="미씽맘 운영 시나리오：발견자"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("최종 서비스 시나리오")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/missingmome_3.png"}
              alt="미씽맘 최종 목표 서비스"
            ></img>
            <img
              className="enImg"
              src={"/assets/missingmome_3_en.png"}
              alt="미씽맘 최종 목표 서비스"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("미씽맘 주요화면")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/missingmomimg4.png"}
              alt="미씽맘 주요화면"
            ></img>
            <img
              className="enImg"
              src={"/assets/missingmomimg4En.png"}
              alt="미씽맘 주요화면"
            ></img>
          </div>
        </div>

        {/* <div className="scenario iframe omeyeVideo">
          <h2>◑ {t("미씽맘 소개 영상")}</h2>
          <div>
            <iframe
              className="koVideo"
              style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
              src="https://www.youtube.com/embed/D4Oz_b7OjLM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              className="enVideo"
              style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
              src="https://www.youtube.com/embed/CbekUlK8u4o "
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}

        <div className="brochurebox">
          <h1>Brochure</h1>
          <p>
            <b style={{ color: "#0064ab" }}>{t("미씽맘")}</b>{" "}
            {t("브로슈어를 PDF로 받아보실 수 있습니다.")}
          </p>

          <a className="koBrochure" href="/pdf/MissingMom_KR.pdf" download>
            <button>미씽맘 다운받기</button>
          </a>
          <a className="koBrochure" href="/pdf/Solution_KR.pdf" download>
            <button>전체 솔루션 다운받기</button>
          </a>

          <a className="enBrochure" href="/pdf/MissingMom_EN.pdf" download>
            <button style={{ textTransform: "capitalize " }}>Download MissingMom</button>
          </a>
          <a className="enBrochure" href="/pdf/Solution_EN.pdf" download>
            <button style={{ textTransform: "capitalize " }}>Download All Solutions</button>
          </a>
        </div>
        {/*
        <div className="pay-box inno">
          <h1>{t("조달청 혁신제품")}</h1>
          <a
            href={
              "https://ppi.g2b.go.kr:8914/sm/dm/sch/searchGoodsList.do?invGdsIdntNo=&srchwrd=&keyword=&viewType=list&corpNm=%25EC%25A3%25BC%25EC%258B%259D%25ED%259A%258C%25EC%2582%25AC%2520%25EC%259B%2590%25EB%25AA%25A8%25EC%2596%25B4%25EC%258B%259C%25ED%2581%2590%25EB%25A6%25AC%25ED%258B%25B0&prdctClsfcNm=&invCertiNms=&corpCertiNms=&prdctCertiNms=&invCertPblctnSbjctNms=&lrgeCtgrNm=&middlCtgrNm=&smallCtgrNm=&subCategory=mall&attrNm=&attrMergeInfo=&sorts=_score%5Edesc&isRprsntGds=N&regions=36000&size=10&from=1&sort=_score%5Edesc&pageUnit=10&lrgeCtgrNo=&middlCtgrNo=&smallCtgrNo=&regionCd=36000&startPrice=&endPrice="
            }
            target="_blank"
          >
            <button> {t("상품 보러가기")}</button>
          </a>
        </div>
        */}
      </div>
    </li>
  );
}

export default withHead(
  Missingmom,
  "(주)원모어시큐리티 - 미씽맘",
  "미아·치매노인 찾기를 위한 시민 참여형 서비스.",
  MISSINGMOM_keywords
);
