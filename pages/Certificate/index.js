import React from "react";

import "../../css/Certificate.module.css";
import "../../css/Global_Company.module.css";
import withHead from "../../components/withHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ClickMenu from "../../components/ClickMenu/ClickMenu";
import CompanyMain from "../../components/Company/CompanyMain";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Certificate() {
  return (
    <>
      <CompanyMain/>
      <ClickMenu cname="Certificate"/>
      <CertificateInfo/>
    </>
  );
}

function CertificateInfo() {
  const { t } = useTranslation("common");

  return (
    <li className="certificate">
      
      <div className="certificatebox">
        
        <h3>{t("수상")}</h3>
        <ul className="row row-cols-4">  

          <li className="col">
              <img
                src={"/assets/awards8.png"}
                width="75%"
                alt="과학기술정보통신부 장관상 수상 (우수기업 2024)"
                ></img>
              <p>
                {t("과학기술정보통신부 장관상 수상")}
                <br></br>
                {t("(우수기업 2024)")}
              </p>
          </li>        
          <li className="col">
              <img
                src={"/assets/awards7.png"}
                width="75%"
                alt="산업통상부장관상 수상 (신기술 실용화를 통한 국가산업발전 기여)"
              ></img>
              <p>
                {t("산업통상부장관상 수상")}
                <br></br>
                {t("(신기술 실용화를 통한 국가산업발전 기여)")}
              </p>
          </li>
          <li className="col">
              <img
                src={"/assets/awards6.png"}
                width="75%"
                alt="과학기술정보통신부 장관상 수상 (정보보호 유공)"
              ></img>
              <p>
                {t("과학기술정보통신부 장관상 수상")}
                <br></br>
                {t("(정보보호 유공)")}
              </p>
          </li>
          <li className="col">
              <img
                src={"/assets/awards5.png"}
                width="75%"
                alt="과학기술정보통신부 장관상 수상 (정보보호제품 혁신대상)"
              ></img>
              <p>
                {t("과학기술정보통신부 장관상 수상")}
                <br></br>
                {t("(정보보호제품 혁신대상)")}
              </p>
          </li>
          <li className="col">
              <img
                src={"/assets/awards4.png"}
                width="75%"
                alt="대한민국발명특허대전 중소기업중앙회장상"
                ></img>
              <p>
                {t("대한민국발명특허대전")}
                <br></br>
                {t("중소기업중앙회장상 수상")}
              </p>
          </li>
          <li className="col">
              <img
                src={"/assets/awards3.png"}
                width="75%"
                alt="과학기술정보통신부 장관상 수상 (우수기업 2022)"
                ></img>
              <p>
                {t("과학기술정보통신부 장관상 수상")}
                <br></br>
                {t("(우수기업 2022)")}
              </p>
          </li>
          <li className="col">
              <img
                src={"/assets/awards2.png"}
                width="75%"
                alt="WSCE AWARDS"
                ></img>
              <p>
                {t("월드 스마트시티 엑스포 스마트시티")}
                <br></br>
                {t("솔루션 부문 어워즈 수상")}
              </p>
          </li>
          <li className="col">
              <img
                src={"/assets/awards1.png"}
                width="75%"
                alt="강서구 스마트도시 아이디어 공모전"
              ></img>
              <p>
                {t("제2회 강서구 스마트도시 아이디어 공모전")}
                <br></br>
                {t("우수상 수상")}
              </p>
          </li>
        </ul>
      </div>

      <div className="certificatebox">
        <h3>{t("인증서")}</h3>

        <ul className="row  row-cols-4">
        
        <li className="col">
          <img
            className="koCertificateImg"
            src={"/assets/CertificateK-ICTC7.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
          <img
            className="enCertificateImg"
            src={"/assets/CertificateK-ICTC7En.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
            <p>
              {t("원모어아이 v2.0")}
              <br></br>
              {t("KISA K-ICTC 인증서")}
              <br></br>
              {t("(배회)")}
            </p>
        </li>
        <li className="col">
          <img
            className="koCertificateImg"
            src={"/assets/CertificateK-ICTC6.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
          <img
            className="enCertificateImg"
            src={"/assets/CertificateK-ICTC6En.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
            <p>
              {t("원모어아이 v2.0")}
              <br></br>
              {t("KISA K-ICTC 인증서")}
              <br></br>
              {t("(침입)")}
            </p>
        </li>
        <li className="col">
          <img
            className="koCertificateImg"
            src={"/assets/CertificateK-ICTC5.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
          <img
            className="enCertificateImg"
            src={"/assets/CertificateK-ICTC5En.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
            <p>
              {t("원모어아이 v2.0")}
              <br></br>
              {t("KISA K-ICTC 인증서")}
              <br></br>
              {t("(방화)")}
            </p>
        </li>
        <li className="col">
          <img
            className="koCertificateImg"
            src={"/assets/CertificateK-ICTC4.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
          <img
            className="enCertificateImg"
            src={"/assets/CertificateK-ICTC4En.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
            <p>
              {t("원모어아이 v1.0")}
              <br></br>
              {t("KISA K-ICTC 인증서")}
              <br></br>
              {t("(배회, 침입, 유기)")}
            </p>
        </li>
        <li className="col">
          <img
            className="koCertificateImg"
            src={"/assets/CertificateK-ICTC3.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
          <img
            className="enCertificateImg"
            src={"/assets/CertificateK-ICTC3En.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
            <p>
              {t("원모어아이 v1.0")}
              <br></br>
              {t("KISA K-ICTC 인증서")}
              <br></br>
              {t("(배회, 침입, 쓰러짐)")}
            </p>
        </li>
        <li className="col">
          <img
            className="koCertificateImg"
            src={"/assets/CertificateK-ICTC2.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
          <img
            className="enCertificateImg"
            src={"/assets/CertificateK-ICTC2En.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
            <p>
              {t("원모어아이 v1.0")}
              <br></br>
              {t("KISA K-ICTC 인증서")}
              <br></br>
              {t("(배회, 침입, 마케팅)")}
            </p>
        </li>
        <li className="col">
          <img
            className="koCertificateImg"
            src={"/assets/CertificateK-ICTC.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
          <img
            className="enCertificateImg"
            src={"/assets/CertificateK-ICTCEn.png"}
            width="75%"
            alt="KISA K-ICTC 인증서"
          ></img>
            <p>
              {t("원모어아이 v1.0")}
              <br></br>
              {t("KISA K-ICTC 인증서")}
              <br></br>
              {t("(배회, 침입, 방화)")}
            </p>
        </li>
        <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/CertificateOMFace2.png"}
              width="75%"
              alt="원모어페이스 한국인터넷진흥원 K-NBTC 인증서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/CertificateOMFace2En.png"}
              width="75%"
              alt="원모어페이스 한국인터넷진흥원 K-NBTC 인증서"
            ></img>
            <p>
              {t("원모어페이스 v2.0")}
              <br></br>
              {t("KISA K-NBTC 인증서")}
              <br></br>
              {t("(얼굴 인식)")}
            </p>
        </li>
        <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/CertificateOmface.png"}
              width="75%"
              alt="원모어페이스 한국인터넷진흥원 K-NBTC 인증서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/CertificateOmfaceEn.png"}
              width="75%"
              alt="원모어페이스 한국인터넷진흥원 K-NBTC 인증서"
            ></img>
            <p>
              {t("원모어페이스 v1.0")}
              <br></br>
              {t("KISA K-NBTC 인증서")}
              <br></br>
              {t("(얼굴 인식)")}
            </p>
        </li>
        <li className="col">
            <img
              src={"/assets/Certificate11.png"}
              width="75%"
              alt="원모어아이 v2.0 조달청 혁신제품 인증서"
            ></img>
            <p>
              {t("원모어아이 v2.0")}
              <br></br>
              {t("조달청 혁신제품 인증서")}
            </p>
        </li>
        <li className="col" style={{ marginTop: "4.4rem" }}>
            <img
              width="100%"
              src={"/assets/Certificate7.png"}
              alt="조달청 혁신제품 지정"
            ></img>
            <p>
              {t("조달청 혁신제품")}
              <br></br>
              {t("지정증서2")}
            </p>
        </li>
        <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/CertificatePPSEP.png"}
              width="75%"
              alt="조달청 우수제품 지정"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/CertificatePPSEPEn.png"}
              width="75%"
              alt="조달청 우수제품 지정"
            ></img>
            <p>
              {t("원모어아이 v1.0")}
              <br></br>
              {t("조달청 우수제품 지정증서")}
            </p>
        </li>
        <li className="col">
            <img
              src={"/assets/CertificateNEP.png"}
              width="75%"
              alt="원모어아이 신제품(NEP) 인증서"
            ></img>
            <p>
              {t("원모어아이 v1.0")}
              <br></br>
              {t("신제품(NEP) 인증서")}
            </p>
        </li>   
        <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/CertificateOMEYEv2.0.png"}
              width="75%"
              alt="원모어아이 v2.0 TTA GS 1등급 인증서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/CertificateOMEYEEnv2.0.png"}
              width="75%"
              alt="원모어아이 v2.0 TTA GS 1등급 인증서"
            ></img>
            <p>
              {t("원모어아이 v2.0")}
              <br></br>
              {t("TTA GS 1등급 인증서")}
            </p>
        </li>
        <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/CertificateOMEYE.png"}
              width="75%"
              alt="원모어아이 TTA GS 1등급 인증서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/CertificateOMEYEEn.png"}
              width="75%"
              alt="원모어아이 TTA GS 1등급 인증서"
            ></img>
            <p>
              {t("원모어아이 v1.0")}
              <br></br>
              {t("TTA GS 1등급 인증서")}
            </p>
        </li>
        <li className="col">
          <img
            src={"/assets/CertificateEIST.png"}
            width="75%"
            alt="우수 정보보호기술등 지정서"
          ></img>
            <p>
              {t("원모어아이 v1.0")}
              <br></br>
              {t("우수 정보보호기술등 지정서")}
            </p>
        </li>
        <li className="col">
            <img
              src={"/assets/CertificateSmartCityPlatform1.png"}
              width="75%"
              alt="스마트시티플랫폼 TTA인증서"
            ></img>
            <p>
              {t("원모어아이 스마트시티 플랫폼")}
              <br></br>
              {t("TTA 인증서")}
            </p>
        </li>          
        <li className="col">
            <img
              src={"/assets/CertificateOmpass2.png"}
              width="75%"
              alt="원모어패스 한국인터넷진흥원 K-BTC 인증서"
            ></img>
            <p>
              {t("원모어패스 v1.0")}
              <br></br>
              {t("클라우드컴퓨팅서비스 확인서")}
            </p>
        </li>
        <li className="col" style={{ marginTop: "4.4rem" }}>
            <img
              src={"/assets/CertificateOmpass.png"}
              width="93%"
              alt="FIDO Alliance 국제 인증서"
            ></img>
            <p>
              {t("원모어패스 v1.0")}
              <br></br>
              {t("FIDO Alliance 국제 인증서")}
            </p>
          </li>
          <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/CertificateOmpass1.png"}
              width="75%"
              alt="원모어패스 TTA GS 1등급 인증서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/CertificateOmpass1En.png"}
              width="75%"
              alt="원모어패스 TTA GS 1등급 인증서"
            ></img>
            <p>
              {t("원모어패스 v1.0")}
              <br></br>
              {t("TTA GS 1등급 인증서")}
            </p>
          </li>
          <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/CertificatePc4.png"}
              width="75%"
              alt="내PC지키미 4.0 TTA GS 1등급 인증서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/CertificatePc4En.png"}
              width="75%"
              alt="내PC지키미 4.0 TTA GS 1등급 인증서"
            ></img>
            <p>
              {t("내PC지키미 4.0")}
              <br></br>
              {t("TTA GS 1등급 인증서")}
            </p>
          </li>
          <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/CertificateSecureprint.png"}
              width="75%"
              alt="오엠에스 시큐어 프린트 TTA GS 1등급 인증서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/CertificateSecureprintEn.png"}
              width="75%"
              alt="오엠에스 시큐어 프린트 TTA GS 1등급 인증서"
            ></img>
            <p>
              {t("오엠에스 시큐어 프린트 v1.0")}
              <br></br>
              {t("TTA GS 1등급 인증서")}
            </p>
          </li>
          <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/CertificateScapsule.png"}
              width="75%"
              alt="에스캡슐 TTA GS 1등급 인증서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/CertificateScapsuleEn.png"}
              width="75%"
              alt="에스캡슐 TTA GS 1등급 인증서"
            ></img>
            <p>
              {t("에스캡슐 v1.0")}
              <br></br>
              {t("TTA GS 1등급 인증서")}
            </p>
          </li>
          <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/CertificateOmscode.png"}
              width="75%"
              alt="오엠에스코드 TTA GS 1등급 인증서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/CertificateOmscodeEn.png"}
              width="75%"
              alt="오엠에스코드 TTA GS 1등급 인증서"
            ></img>
            <p>
              {t("오엠에스 코드 v1.0")}
              <br></br>
              {t("TTA GS 1등급 인증서")}
            </p>
          </li>

          <li className="col">
            <img
              width="75%"
              src={"/assets/Certificate1.png"}
              alt="조달청 벤처 기업 지정증서"
            ></img>
            <p>
              {t("조달청 벤처 기업")}
              <br></br>
              {t("지정증서")}
            </p>
          </li>
        </ul>
      </div>

      <div className="certificatebox2">
        <h3>{t("등록증")}</h3>

        <ul className="row  row-cols-4">
        <li className="col">
            <img
              src={"/assets/copyrightOMEYESmartSelectiveSurveillancev1.0.png"}
              width="75%"
              alt="원모어아이 선별관제 v1.0 저작권 등록증"
            ></img>
            <p>
              {t("원모어아이 선별관제 v1.0")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightOMEYEv1.2.png"}
              width="75%"
              alt="원모어아이v1.2 저작권 등록증"
            ></img>
            <p>
              {t("원모어아이 v1.2")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightOMEYESmartCityPlatform.png"}
              width="75%"
              alt="원모어아이 스마트시티 플랫폼 저작권 등록증"
            ></img>
            <p>
              {t("원모어아이 스마트시티 플랫폼")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightOMEYEv2.0.png"}
              width="75%"
              alt="원모어아이v2.0 저작권 등록증"
            ></img>
            <p>
              {t("원모어아이 v2.0")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightOMEYE.png"}
              width="75%"
              alt="원모어아이 저작권 등록증"
            ></img>
            <p>
              {t("원모어아이 v1.0")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightsecureprint.png"}
              width="75%"
              alt="오엠에스 시큐어 프린트 저작권 등록증"
            ></img>
            <p>
              {t("오엠에스 시큐어 프린트 v1.0")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightOmscode.png"}
              width="75%"
              alt="오엠에스 코드 저작권 등록증"
            ></img>
            <p>
              {t("오엠에스 코드 v1.0")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightScapsule.png"}
              width="75%"
              alt="에스캡슐 저작권 등록증"
            ></img>
            <p>
              {t("에스캡슐 v1.0")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightPc4.png"}
              width="75%"
              alt="내PC지키미 4.0 저작권 등록증"
            ></img>
            <p>
              {t("내PC지키미 4.0")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightMissingmom.png"}
              width="75%"
              alt="미씽맘 저작권 등록증"
            ></img>
            <p>
              {t("미씽맘 v1.0")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightOmpass.png"}
              width="75%"
              alt="원모어패스 저작권 등록증"
            ></img>
            <p>
              {t("원모어패스 v1.0")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>
          <li className="col">
            <img
              src={"/assets/copyrightOmface.png"}
              width="75%"
              alt="원모어페이스 저작권 등록증"
            ></img>
            <p>
              {t("원모어페이스 v1.0")}
              <br></br>
              {t("저작권 등록증")}
            </p>
          </li>{" "}
        </ul>
      </div>

      <div className="certificatebottombox">
        <ul className="row">
          <li className="col">
            <img
              src={"/assets/Certificate10.png"}
              width="100%"
              alt="기술평가 우수기업 인증서"
            ></img>
            <p>
              {t("기술평가 우수기업")}
              <br></br>
              {t("인증서")}
            </p>
          </li>
          <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/Certificate9.png"}
              width="100%"
              alt="G-PASS기업 지정서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/Certificate9En.png"}
              width="100%"
              alt="G-PASS기업 지정서"
            ></img>
            <p>
              {t("G-PASS기업")}
              <br></br>
              {t("지정서")}
            </p>
          </li>
          <li className="col">
            <img
              className="koCertificateImg"
              src={"/assets/Certificate8.png"}
              width="100%"
              alt="이노비즈 확인서"
            ></img>
            <img
              className="enCertificateImg"
              src={"/assets/Certificate8En.png"}
              width="100%"
              alt="이노비즈 확인서"
            ></img>
            <p>
              {t("이노비즈")}
              <br></br>
              {t("확인서")}
            </p>
          </li>
          <li className="col">
            <img
              width="100%"
              src={"/assets/Certificate6.png"}
              alt="KSM 등록기업 확인서"
            ></img>
            <p>
              {t("KSM 등록기업")}
              <br></br>
              {t("확인서")}
            </p>
          </li>
          <li className="col">
            <img
              width="100%"
              src={"/assets/Certificate5.png"}
              alt="벤처기업 확인서"
            ></img>
            <p>
              {t("벤처기업")}
              <br></br>
              {t("확인서")}
            </p>
          </li>
          <li className="col">
            <img
              width="100%"
              src={"/assets/Certificate3.png"}
              alt="창업기업 확인서"
            ></img>
            <p>
              {t("창업기업")}
              <br></br>
              {t("확인서")}
            </p>
          </li>
          <li className="col">
            <img
              width="100%"
              src={"/assets/Certificate4.png"}
              alt="직접생산 확인증명서"
            ></img>
            <p>
              {t("직접생산")}
              <br></br>
              {t("확인증명서")}
            </p>
          </li>
          <li className="col">
            <img
              width="100%"
              src={"/assets/Certificate2.png"}
              alt="기업부설연구소 인정서"
            ></img>
            <p>
              {t("기업부설연구소")}
              <br></br>
              {t("인정서")}
            </p>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default withHead(
  Certificate,
  "(주)원모어시큐리티 - 수상&인증서&등록증",
  '세계 최고의 보안기술을 제공하는 "글로벌 보안 유니콘기업"을 목표로 달려가겠습니다.'
);
