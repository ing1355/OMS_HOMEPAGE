import React, { useEffect } from "react";
import $ from "jquery";

import "../../css/Products.module.css";
import "../../css/Omeye.module.css";
import "../../css/Ompass.module.css";
import "../../css/Packagebox.module.css";

import withHead from "../../components/withHead";

import { OMPASS_keywords } from "../../Constants/Keywords";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ClickMenu2 from "../../components/ClickMenu/ClickMenu2";
import SolutionMain from "../../components/Solution/SolutionMain";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Ompass() {
  return (
    <>
      <SolutionMain/>
      <ClickMenu2 name="Ompass"/>
      <OmpassSolution/>
    </>
  );
}

function OmpassSolution() {
  useEffect(() => {
    $(function () {
      $(".packageBox-videoButton").click(function () {
        var offset = $(".ompass .iframe").offset();
        $("html, body").animate({ scrollTop: offset.top }, 0);
      });
    });
  });

  const { t } = useTranslation("common");
  return (
    <li className="ompass">
      <div className="ompasstextbox">
        <div className="packageBox-title packageBox-title-ompass">
          <div className="packageBox-title-div">
            <ul>
              <li>
                <img
                  className="Solutionimg koImg"
                  src={"/assets/OMPASS1.png"}
                  alt="원모어패스"
                ></img>
                <img
                  className="Solutionimg enImg"
                  src={"/assets/OMPASS1En.png"}
                  alt="원모어패스"
                ></img>
              </li>
            </ul>
            <ul>
              <h1 className="ompass-h1">{t("원모어패스")}</h1>
              <h2>{t("차세대 통합 인증 솔루션(FIDO 인증)")}</h2>
              <p>{t("FIDO 기반 생체인증·간편인증")}</p>
              <p>{t("피싱 방지 MFA(Multi-Factor Authentication) 서비스")}</p>

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
              src={"/assets/FIDO.png"}
              alt="FIDO Alliance"
            ></img>
            <img
              className="EnCertifications"
              src={"/assets/FIDOEn.png"}
              alt="FIDO Alliance"
            ></img>

            <img
              className="KoCertifications"
              src={"/assets/NIPA.png"}
              alt="NIPA"
            ></img>
            <img
              className="EnCertifications"
              src={"/assets/NIPAEn.png"}
              alt="NIPA"
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
          <div className="packageBox-title-div">
            <ul style={{ background: "#004e8", color: "#fff", padding: "0.5rem 1rem" }}>
              {/* <button className="packageBox-videoButton">
                {t("소개 영상 보기")}
                <img
                  src={"/assets/playCircle.png"}
                ></img>
              </button> */}


                {/* <div className="packageBox-videoButton cloud-button"> 
                 <Link href="https://www.ompasscloud.com/ko">
                 <p>{t("클라우드 서비스 이용하기 →")}</p>
                 </Link>
                 </div>  */}


            <button className="cloud-button">
                <a
                  target="_blank"
                  href="https://www.ompasscloud.com/ko"
                  style={{width: "100%", height: "auto", padding:"0.8rem 1rem"}}
                  className="cloud-button koImg"
                >
                  클라우드 서비스 이용하기 →
                </a>

                <a
                  target="_blank"
                  href="https://www.ompasscloud.com/en"
                  style={{width: "100%", height: "auto", padding:"0.8rem 1rem"}}
                  className="cloud-button enImg"
                >
                  Go Cloud →
                </a>
              </button>

            </ul>
          </div>
        </div>

        <div className="scenario iframe ompassVideo">
          <h2>◑ {t("원모어패스 소개 영상")}</h2>
          <div>
            <iframe
              className="koVideo"
              style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
              src="https://www.youtube.com/embed/KsFukpPL6wg?si=hGirMT0ePaVPaBPy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <iframe
              className="enVideo"
              style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
              src="https://www.youtube.com/embed/oyPRHNtUaU4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("차세대 통합 인증 솔루션의 도입 필요성")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/ompassimg1.png"}
              alt="원모어패스 차세대 통합 인증 솔루션의 도입 필요성"
            ></img>
            <img
              className="Desktop enImg"
              src={"/assets/ompassimg1En.png"}
              alt="원모어패스 차세대 통합 인증 솔루션의 도입 필요성"
            ></img>
            {/* <img
              className="KoMobile"
              src={"/assets/ompass1Mobile.png"}
              alt="원모어패스 차세대 통합 인증 솔루션의 도입 필요성"
            ></img>
            <img
              className="EnMobile"
              src={"/assets/ompass1MobileEn.png"}
              alt="원모어패스 차세대 통합 인증 솔루션의 도입 필요성"
            ></img> */}
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("차세대 통합 인증 솔루션")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/ompassimg2.png"}
              alt="원모어패스 차세대 통합 인증 솔루션"
            ></img>{" "}
            <img
              className="Desktop enImg"
              src={"/assets/ompassimg2En.png"}
              alt="원모어패스 차세대 통합 인증 솔루션"
            ></img>
            {/* <img
              className="KoMobile"
              src={"/assets/ompass2Mobile.png"}
              alt="원모어패스 차세대 통합 인증 솔루션"
            ></img>
            <img
              className="EnMobile"
              src={"/assets/ompass2MobileEn.png"}
              alt="원모어패스 차세대 통합 인증 솔루션"
            ></img> */}
          </div>
        </div>

        <div className="scenario" id="scenario">
          <h2>◑ {t("원모어패스 특장점")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/ompassimg3.png"}
              alt="원모어패스 특장점"
            ></img>
            <img
              className="Desktop enImg"
              src={"/assets/ompassimg3En.png"}
              alt="원모어패스 특장점"
            ></img>
            {/* <img
              className="KoMobile"
              src={"/assets/ompass3Mobile.png"}
              alt="원모어패스 특장점"
            ></img>{" "}
            <img
              className="EnMobile"
              src={"/assets/ompass3MobileEn.png"}
              alt="원모어패스 특장점"
            ></img> */}
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("원모어패스 주요기능(경쟁력)")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/ompassimg4.png"}
              alt="원모어패스 주요기능"
            ></img>
            <img
              className="enImg"
              src={"/assets/ompassimg4En.png"}
              alt="원모어패스 주요기능"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("원모어패스 사양·구성도")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/ompassimg5.png"}
              alt="원모어패스 사양 및 구성도"
            ></img>
            <img
              className="enImg"
              src={"/assets/ompassimg5En.png"}
              alt="원모어패스 사양 및 구성도"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("원모어패스 주요화면")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/ompassimg6.png"}
              alt="원모어패스 주요화면"
            ></img>{" "}
            <img
              className="enImg"
              src={"/assets/ompassimg6En.png"}
              alt="원모어패스 주요화면"
            ></img>
          </div>
        </div>

        {/* <div className="scenario iframe ">
          <h2>◑ {t("원모어패스 소개 영상")}</h2>
          <div>
            <iframe
              className="koVideo"
              style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
              src="https://www.youtube.com/embed/KsFukpPL6wg?si=hGirMT0ePaVPaBPy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <iframe
              className="enVideo"
              style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
              src="https://www.youtube.com/embed/oyPRHNtUaU4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}

        <div className="go-cloud">
          <h1>{t("원모어패스-클라우드형")}</h1>
          <p>{t("원모어패스 클라우드형 서비스를 체험하실 수 있습니다.")}</p>
          <a
            href="https://www.ompasscloud.com/ko"
            className="koImg"
            target="_blank"
          >
            체험하기
          </a>
          <a
            href="https://www.ompasscloud.com/en"
            target="_blank"
            className="enImg"
          >
            Try Now
          </a>
        </div>

        <div className="brochurebox">
          <h1>Brochure</h1>
          <p>
            <b style={{ color: "#0064ab" }}>{t("원모어패스")}</b>
            {""}
            {t("브로슈어를 PDF로 받아보실 수 있습니다.")}
          </p>

          <a
            className="koBrochure"
            href="/pdf/OMPASS_KR.pdf"
            download
          >
            <button>원모어패스 다운받기</button>
          </a>
          <a className="koBrochure" href="/pdf/Solution_KR.pdf" download>
            <button>전체 솔루션 다운받기</button>
          </a>

          <a className="enBrochure" href="/pdf/OMPASS_EN.pdf" download>
            <button style={{ textTransform: "capitalize " }}>
              Download OMPASS
            </button>
          </a>
          <a className="enBrochure" href="/pdf/Solution_EN.pdf" download>
            <button style={{ textTransform: "capitalize " }}>
              Download All Solutions
            </button>
          </a>
        </div>

        <div className="pay-box n3">
          <h1>{t("3자단가계약")}</h1>
            <p>
              {t("원모어패스 구축형을 조달청 디지털서비스몰에서 만나보세요")}
            </p>
          <a
            href={
              "https://digitalmall.g2b.go.kr/"
            }
            target="_blank"
          >
            <button> {t("상품 보러가기")}</button>
          </a>
        </div>
      </div>
    </li>
  );
}

export default withHead(
  Ompass,
  "(주)원모어시큐리티 - 원모어패스",
  "FIDO 기반 생체인증·간편인증",
  OMPASS_keywords
);
