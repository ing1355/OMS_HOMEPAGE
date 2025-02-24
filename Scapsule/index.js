import React, { useEffect } from "react";
import $ from "jquery";

import "../../css/Products.module.css";
import "../../css/Scapsule.module.css";
import "../../css/Ompass.module.css";
import "../../css/Packagebox.module.css";

import withHead from "../../components/withHead";
import { SCAPSULE_keywords } from "../../Constants/Keywords";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ClickMenu2 from "../components/ClickMenu/ClickMenu2";
import SolutionMain from "../components/Solution/SolutionMain";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Scapsule() {
  return (
    <>
      <SolutionMain/>
      <ClickMenu2 name="Scapsule"> </ClickMenu2>
      <SacpsuleSolution></SacpsuleSolution>
    </>
  );
}

function SacpsuleSolution() {
  useEffect(() => {
    $(function () {
      $(".packageBox-videoButton").click(function () {
        var offset = $(".scapsule .iframe").offset();
        $("html, body").animate({ scrollTop: offset.top }, 0);
      });
    });
  });
  const { t } = useTranslation("common");
  return (
    <li className="scapsule">
      <div className="scapsuletextbox">
        <div className="packageBox-title packageBox-title-scapsule">
          <div className="packageBox-title-div">
            <ul>
              <li>
                <img
                  className="Solutionimg koImg"
                  src={"/assets/SCAPSULE1.png"}
                  alt="에스캡슐"
                ></img>
                <img
                  className="Solutionimg enImg"
                  src={"/assets/SCAPSULE1En.png"}
                  alt="에스캡슐"
                ></img>
              </li>
            </ul>
            <ul>
              <h1 className="scapsule-h1">{t("에스캡슐")}</h1>
              <h2>{t("주요정보 유출방지 올인원 솔루션")}</h2>
              <p>
                {t(
                  "영역보안, DLP, 출력 보안, 화면 보안, 랜섬웨어 차단, 외부 반출문서 보안"
                )}
              </p>

              <div>
                <span>
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
                    className="KoCertifications"
                    src={"/assets/C2.png"}
                    alt="중소벤처기업부 비대면바우처 공급 제품"
                  ></img>
                  <img
                    className="EnCertifications"
                    src={"/assets/C2En.png"}
                    alt="중소벤처기업부 비대면바우처 공급 제품"
                  ></img>
                </span>
              </div>
            </ul>
          </div>
          <div className="packageBox-title-div">
            <ul>
              <button className="packageBox-videoButton">
                {t("시연 영상 보기")}
                <img
                  src={"/assets/playCircle.png"}
                ></img>
              </button>
            </ul>
          </div>
        </div>

        <div className="scenario" id="scenario">
          <h2>◑ {t("주요정보 유출방지 올인원 솔루션의 도입 필요성")}</h2>
          <div>
            <img
              className="Desktop koImg"
              src={"/assets/scapsuleimg1.png"}
              alt="에스캡슐 도입 필요성"
            ></img>
            <img
              className="Desktop enImg"
              src={"/assets/scapsuleimg1En.png"}
              alt="에스캡슐 도입 필요성"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("에스캡슐 주요기능(경쟁력)")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/scapsuleimg2.png"}
              alt="에스캡슐 주요기능 안전한 커널기반 데이터 보호 기능"
            ></img>
            <img
              className="enImg"
              src={"/assets/scapsuleimg2En.png"}
              alt="에스캡슐 주요기능 안전한 커널기반 데이터 보호 기능"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <div>
            <img
              className="koImg"
              src={"/assets/scapsuleimg3.png"}
              alt="에스캡슐 모든 어플리케이션 통제 기능 및 강력한 사용자 인증 및 셀프 데이터 보호 기능"
            ></img>
            <img
              className="enImg"
              src={"/assets/scapsuleimg3En.png"}
              alt="에스캡슐 모든 어플리케이션 통제 기능 및 강력한 사용자 인증 및 셀프 데이터 보호 기능"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <div>
            <img
              className="koImg"
              src={"/assets/scapsuleimg4.png"}
              alt="에스캡슐 화면 및 출력물 보안 기능 및 내부 정책 위반 행위 상시 모니터링 및 블랙리스트 식별 기능"
            ></img>{" "}
            <img
              className="enImg"
              src={"/assets/scapsuleimg4En.png"}
              alt="에스캡슐 화면 및 출력물 보안 기능 및 내부 정책 위반 행위 상시 모니터링 및 블랙리스트 식별 기능"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <div>
            <img
              className="koImg"
              src={"/assets/scapsuleimg5.png"}
              alt="에스캡슐 안전하고 간편한 내부 공유 및 매체제어 및 네트워크 통제 기능"
            ></img>{" "}
            <img
              className="enImg"
              src={"/assets/scapsuleimg5En.png"}
              alt="에스캡슐 안전하고 간편한 내부 공유 및 매체제어 및 네트워크 통제 기능"
            ></img>
          </div>
        </div>
        <div className="scenario">
          <div>
            <img
              className="koImg"
              src={"/assets/scapsuleimg6.png"}
              alt="에스캡슐 안전하고 효율적인 협업 환경 지원 및 효율적인 관리 기능"
            ></img>
            <img
              className="enImg"
              src={"/assets/scapsuleimg6En.png"}
              alt="에스캡슐 안전하고 효율적인 협업 환경 지원 및 효율적인 관리 기능"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("서비스 구성도")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/scapsuleimg7.png"}
              alt="에스캡슐 서비스 구성도"
            ></img>{" "}
            <img
              className="enImg"
              src={"/assets/scapsuleimg7En.png"}
              alt="에스캡슐 서비스 구성도"
            ></img>
          </div>
        </div>

        <div className="scenario">
          <h2>◑ {t("에스캡슐 DRM 솔루션과의 기능 비교")}</h2>
          <div>
            <img
              className="koImg"
              src={"/assets/scapsuleimg8.png"}
              alt="에스캡슐 DRM 솔루션과의 기능 비교"
            ></img>
            <img
              className="enImg"
              src={"/assets/scapsuleimg8En.png"}
              alt="에스캡슐 DRM 솔루션과의 기능 비교"
            ></img>
          </div>
        </div>
        <div className="scenario iframe">
          <h2>◑ {t("에스캡슐 영상")}</h2>
          <div>
            <iframe
              className="koVideo"
              style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
              src="https://www.youtube.com/embed/OH08Fkn0uAk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <iframe
              className="enVideo"
              style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
              src="https://www.youtube.com/embed/3MhuRLJO6Hs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="brochurebox">
          <h1>Brochure</h1>
          <p>
            <b style={{ color: "#0064ab" }}>{t("에스캡슐")}</b>{" "}
            {t("브로슈어를 PDF로 받아보실 수 있습니다.")}
          </p>

          <a className="koBrochure" href="/pdf/에스캡슐 브로슈어.pdf" download>
            <button>에스캡슐 다운받기</button>
          </a>
          <a className="koBrochure" href="/pdf/Solution_KR.pdf" download>
            <button>전체 솔루션 다운받기</button>
          </a>

          <a className="enBrochure" href="/pdf/S-Capsule_Brochure.pdf" download>
            <button style={{ textTransform: "capitalize " }}>
              Download S-Capsule
            </button>
          </a>
          <a className="enBrochure" href="/pdf/Solution_EN.pdf" download>
            <button style={{ textTransform: "capitalize " }}>
              Download All Solutions
            </button>
          </a>
        </div>

        <div className="pay-box2">
          <h1>{t("조달청 벤처나라")}</h1>

          <a
            href={
              "https://venture.g2b.go.kr:8321/vn/product/selectProductDtl.do?detailProductNm=%BA%B8%BE%C8%BC%D2%C7%C1%C6%AE%BF%FE%BE%EE&detailProductNo=4323320501&prdctIdntNo=23797979&srchValue=???????&upCtgrNo=SEARCH&vntrCorpDprmsOrd=1&vntrCorpDprmsReqSno=10&vntrCorpNm=%C1%D6%BD%C4%C8%B8%BB%E7+%BF%F8%B8%F0%BE%EE%BD%C3%C5%A5%B8%AE%C6%BC&vntrCorpNo=CN0100000626923"
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
  Scapsule,
  "(주)원모어시큐리티 - 에스캡슐",
  "주요정보, 유출방지 올인원 솔루션.",
  SCAPSULE_keywords
);
