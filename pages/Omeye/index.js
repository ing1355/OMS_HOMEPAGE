import React, { useEffect } from "react";
import $ from "jquery";
import "../../css/Products.module.css";
import "../../css/Omeye.module.css";
import "../../css/Packagebox.module.css";

import withHead from "../../components/withHead";
import { OMEYE_keywords } from "../../Constants/Keywords";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ClickMenu2 from "../../components/ClickMenu/ClickMenu2";
import SolutionMain from "../../components/Solution/SolutionMain";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Omeye() {
  return (
    <>
      <SolutionMain/>
      <ClickMenu2 name="Omeye"/>
      <OmeyeSolution/>
    </>
  );
}

function OmeyeSolution() {
  useEffect(() => {
    $(function () {
      $(".packageBox-videoButton").click(function () {
        var offset = $(".omeye .iframe").offset();
        $("html, body").animate({ scrollTop: offset.top }, 0);
      });
    });
  });

  const { t } = useTranslation("common");
  return (
    <li className="omeye">
      <div className="omeyetextbox">
        <div className="packageBox-title packageBox-title-omeye">
          <div className="packageBox-title-div">
            <ul>
              <li>
                <img
                  className="Solutionimg koImg"
                  src={"/assets/OMEYE1.png"}
                  alt="원모어아이"
                ></img>
                <img
                  className="Solutionimg enImg"
                  src={"/assets/OMEYE1En.png"}
                  alt="원모어아이"
                ></img>
              </li>
            </ul>
            <ul>
              <h1 className="omeye-h1">{t("원모어아이")}</h1>
              <h2>{t("지능형 영상분석 올인원 안전 플랫폼")}</h2>
              <p>
                {t("사람·차량 과거 이동경로 추적 및 시각화, 현재 위치 식별")}   
              </p>
              <p>
                {t("선별관제 라이브 모니터링 서비스를 통한 이벤트 탐지")}
              </p>
              <p>
                {t("개인정보 비식별화 및 영상 반출 통제 서비스")} 
              </p>            
              <p>
                {t("관심영역 객체 고속 검색 서비스")} 
              </p>            
            </ul>
          </div>
            <div className="certificationMark">
              <img
                className="koImg"
                src={"/assets/PPSEP.png"}
                alt="조달청 우수제품"
              ></img>
              <img
                className="enImg"
                src={"/assets/PPSEPEn.png"}
                alt="조달청 우수제품"
              ></img>

              <img
                className="koImg"
                src={"/assets/NEP.png"}
                alt="NEP 인증"
              ></img>
              <img
                className="enImg"
                src={"/assets/NEPEn.png"}
                alt="NEP 인증"
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
                className="KoCertifications"
                src={"/assets/TTA.png"}
                alt="TTA Alliance"
              ></img>
              <img
                className="EnCertifications"
                src={"/assets/TTAEn.png"}
                alt="TTA Alliance"
              ></img>

              <img
                className="koImg"
                src={"/assets/KICTC.png"}
                alt="한국인터넷진흥원 K-ICTC"
              ></img>
              <img
                className="enImg"
                src={"/assets/KICTCEn.png"}
                alt="한국인터넷진흥원 K-ICTC"
              ></img>

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
                className="KoCertifications"
                src={"/assets/FIDO.png"}
                alt="FIDO Alliance"
              ></img>
              <img
                className="EnCertifications"
                src={"/assets/FIDOEn.png"}
                alt="FIDO Alliance"
              ></img>

              <img
                className="koImg"
                src={"/assets/C10.png"}
                alt="신기술 실용화"
              ></img>
              <img
                className="enImg"
                src={"/assets/C10En.png"}
                alt="신기술 실용화"
              ></img>

              <img
                className="koImg"
                src={"/assets/C9.png"}
                alt="우수 정보보호 기술"
              ></img>
              <img
                className="enImg"
                src={"/assets/C9En.png"}
                alt="우수 정보보호 기술"
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
                src={"/assets/C8.png"}
                alt="과기부 장관상 정보보호제품 혁신대상"
              ></img>
              <img
                className="enImg"
                src={"/assets/C8En.png"}
                alt="과기부 장관상 정보보호제품 혁신대상"
              ></img>

              <img
                className="KoCertifications"
                src={"/assets/과기정통부수상.png"}
                alt="과기부 장관상 우수기업"
              ></img>
              <img
                className="EnCertifications"
                src={"/assets/과기정통부수상En.png"}
                alt="과기부 장관상 우수기업"
              ></img>

              <img
                className="KoCertifications"
                src={"/assets/WSCE.png"}
                alt="WSCE"
              ></img>
              <img
                className="EnCertifications"
                src={"/assets/WSCEEn.png"}
                alt="WSCE"
              ></img>
            </div>
           <div className="packageBox-title-div">
            <ul>
              {/* <button className="packageBox-videoButton">
                {t("소개 영상 보기")}
                <img
                  src={"/assets/playCircle.png"}
                ></img>
              </button> */}
            </ul>
          </div> 
        </div>

        <div className="scenario iframe omeyeVideo">
          <h2>◑ {t("원모어아이 소개 영상")}</h2>
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
        
        <div className="scenario">
          <h2>◑ {t("지능형 영상분석 올인원 안전 플랫폼의 도입 필요성")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/OMEYEimg1.png"}
              alt="원모어아이 필요성"
            ></img>
            <img
              className="enImg"
              src={"/assets/OMEYE_img1En.png"}
              alt="원모어아이 필요성"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <h2>◑ {t("기존 솔루션의 문제점")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/OMEYEimg2.png"}
              alt="원모어아이 기존 솔루션의 문제점"
            ></img>

            <img
              className="enImg"
              src={"/assets/OMEYEimg2En.png"}
              alt="원모어아이 기존 솔루션의 문제점"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <h2>◑ {t("문제해결에 대한 기술적 접근")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/OMEYEimg3.png"}
              alt="원모어아이 기술적 접근"
            ></img>
            <img
              className="enImg"
              src={"/assets/OMEYEimg3En.png"}
              alt="원모어아이 기술적 접근"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <h2>◑ {t("원모어아이 주요기능(경쟁력)")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/OMEYEimg4.png"}
              alt="원모어아이 주요기능"
            ></img>
            <img
              className="enImg"
              src={"/assets/OMEYEimg4En.png"}
              alt="원모어아이 주요기능"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <h2>◑ {t("원모어아이 서비스 구성도")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/OMEYEimg5.png"}
              alt="원모어아이 서비스 구성도"
            ></img>
            <img
              className="enImg"
              src={"/assets/OMEYEimg5En.png"}
              alt="원모어아이 서비스 구성도"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <h2>◑ {t("주요 화면 및 운영(응용) 시나리오")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/OMEYEimg.png"}
              alt="원모어아이 시나리오"
            ></img>
            <img
              className="enImg"
              src={"/assets/OMEYEimgEn.png"}
              alt="원모어아이 시나리오"
            ></img>
          </div>
          <div style={{marginTop: "2rem"}}>
            <video loop autoPlay muted preload="metadata" width="1024" src="/assets/productionID_3936991.mp4#t=0.5" />
          </div> 
          <div>
            <img
              className="koImg"
              src={"/assets/OMEYEimg_2.png"}
              alt="원모어아이 시나리오"
            ></img>
            <img
              className="enImg"
              src={"/assets/OMEYEimgEn_2.png"}
              alt="원모어아이 시나리오"
            ></img>
          </div>
        </div>
        

         {/* <div className="scenario iframe omeyeVideo">
          <h2>◑ {t("원모어아이 소개 영상")}</h2>
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
        </div>  */}

        <div className="brochurebox">
          <h1>Brochure</h1>
          <p>
            <b style={{ color: "#0064ab" }}>{t("원모어아이")} </b>
            {t("브로슈어를 PDF로 받아보실 수 있습니다.")}
          </p>

          <a
            className="koBrochure"
            href="/pdf/OMEYE_KR.pdf"
            download
          >
            <button>원모어아이 다운받기</button>
          </a>
          <a className="koBrochure" href="/pdf/Solution_KR.pdf" download>
            <button>전체 솔루션 다운받기</button>
          </a>

          <a className="enBrochure" href="/pdf/OMEYE_EN.pdf" download>
            <button style={{ textTransform: "capitalize " }}>
              Download OMEYE
            </button>
          </a>
          <a className="enBrochure" href="/pdf/Solution_EN.pdf" download>
            <button style={{ textTransform: "capitalize " }}>
              Download All Solutions
            </button>
          </a>
        </div>
        <div className="pay-box inno">
          <h1>{t("조달청 혁신제품")}</h1>

          <a
            href={
              "https://ppi.g2b.go.kr:8914/sc/srchList.do?kwd=%EC%9B%90%EB%AA%A8%EC%96%B4%EC%8B%9C%ED%81%90%EB%A6%AC%ED%8B%B0&category=TOTAL"
            }
            target="_blank"
          >
            <button> {t("상품 보러가기")}</button>
          </a>
            
        </div>
        <div className="pay-box epp">
          <h1>{t("조달우수물품")}</h1>
            <p>
              {t("원모어아이를 조달청 나라장터 종합쇼핑몰에서 만나보세요")}
            </p>
          <a
            href={
              "https://shop.g2b.go.kr/"
            }
            target="_blank"
          >
            <button> {t("상품 보러가기")}</button>
          </a>
        </div>

        <div className="pay-box nep">
          <h1>{t("신제품(NEP)")}</h1>

          <a
            href={
              "http://www.buynp.or.kr/asp/front/category/product_detail.asp?catalogCode=CA00023574"
            }
            target="_blank"
          >
            <button> {t("상품 보러가기")}</button>
          </a>

          {/* <img src="/assets/nep-dsm-bg.png"></img> */}

        </div>
      </div>
    </li>
  );
}

export default withHead(
  Omeye,
  "(주)원모어시큐리티 - 원모어아이",
  "다중 CCTV 영상 연계형 사람(차량) 이동경로 추적 및 시각화 솔루션.",
  OMEYE_keywords
);
