import React from "react";

import "../../css/Global_Company.module.css";
import "../../css/Patent.module.css";
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

function Patent() {
  return (
    <>
      <CompanyMain/>
      <ClickMenu cname="Patent"/>
      <PatentInfo/>
    </>
  );
}

function PatentInfo() {
  const { t } = useTranslation("common");

  return (
    <li className="paten">
      <div className="patenbox">
        <h3>{t("특허 보유")}</h3>

        <ul>
          <table>
            <th className="world">{t("국가")}</th>
            <th className="invention">{t("발명(고안)의 명칭")}</th>
            <th className="registrationnumber">{t("등록(출원)번호")}</th>

            <tr>
              <td>{t("대한민국")}</td>
              <td>{t("인공 지능 기반 객체 탐지 및 추적을 활용한 화재 상황 인식 장치 및 방법")}</td>
              <td>10-2025-0006488</td>
            </tr>

            <tr>
              <td>{t("독일")}</td>
              <td>
                Device and Method for Providing Missing Child Search Service Based on Face Recognition Using Deep Learning
              </td>
              <td>11 2021 004 252.1</td>
            </tr>

            <tr>
              <td>{t("독일")}</td>
              <td>
                APPARATUS AND METHOD FOR TRACKING MISSING PERSON BASED ON ATTRIBUTE
              </td>
              <td>11 2022 000 061.9</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>{t("속성 기반 실종자 추적 장치 및 방법")}</td>
              <td>10-2022-0147011</td>
            </tr>

            <tr>
              <td>PCT</td>
              <td>
              APPARATUS AND METHOD FOR TRACKING MISSING PERSON BASED ON ATTRIBUTE
              </td>
              <td>PCT/KR2022/017439</td>
            </tr>
            
            <tr>
              <td>{t("미국")}</td>
              <td>APPARATUS AND METHOD FOR TRACKING MISSING PERSON BASED ON ATTRIBUTE</td>
              <td>18/009,560</td>
            </tr>

            <tr>
              <td>{t("영국")}</td>
              <td>APPARATUS AND METHOD FOR TRACKING MISSING PERSON BASED ON ATTRIBUTE</td>
              <td>2218660.5</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>{t("인공지능 기반 부정 주차 관리 방법 및 장치")}</td>
              <td>10-2022-0120845</td>
            </tr>

            <tr>
              <td>{t("영국")}</td>
              <td>Device and Method for Providing Missing Child Search Service Based on Face Recognition Using Deep Learning</td>
              <td>2213332.6</td>
            </tr>
            
            <tr>
              <td>PCT</td>
              <td>
                Method and apparatus for providing personal protection alarm
              </td>
              <td>PCT/KR2022/006361</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>{t("신변 보호 알람 제공 방법 및 장치")}</td>
              <td>10-2545383</td>
            </tr>

            <tr>
              <td>{t("미국")}</td>
              <td>
                Apparatus and method for providing missing child search service
                based on face recognition using Deep-Learning
              </td>
              <td>17/606,590</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>
                {t(
                  "미아 추적 서버 및 미아 추적 서버에서의 딥러닝 기반 미아 이동경로 추적 방법"
                )}
              </td>
              <td>10-2305038</td>
            </tr>

            <tr>
              <td>PCT</td>
              <td>
                Apparatus and method for providing missing child search service
                based on face recognition using Deep-Learning
              </td>
              <td>PCT/KR2021/010589</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>
                {t(
                  "딥러닝 기술 기반 얼굴 인식 알고리즘을 이용한 미아 찾기 장치 및 방법"
                )}
              </td>
              <td>10-2270899</td>
            </tr>

            <tr>
              <td>{t("독일")}</td>
              <td>
                Method and apparatus for preventing illegal outflow of
                electronic documents
              </td>
              <td>15171427.6</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>{t("영상 인식 장치 및 방법")}</td>
              <td>10-2020-0064978</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>{t("얼굴 인식을 위한 얼굴 자세 등록 장치 및 방법")}</td>
              <td>2018-0146791</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>{t("자가 대응 전자문서 불법 유출 방지 장치 및 방법")}</td>
              <td>10-1781970</td>
            </tr>

            <tr>
              <td>{t("미국")}</td>
              <td>
                {t(
                  "기하학적 왜곡에 강인한 점기반 정보를 사용하는 정보 삽입 방법, 정보 추출 방법 및 정보 추출 장치"
                )}
              </td>
              <td>9710872</td>
            </tr>

            <tr>
              <td>{t("미국")}</td>
              <td>
                Method and apparatus for preventing illegal outflow of
                electronic documents
              </td>
              <td>14/736144</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>{t("전자문서 불법 유출 방지 방법 및 장치")}</td>
              <td>10-1599740</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>
                {t("자료 유출 방지를 위한 이동 저장매체 제어 장치 및 방법")}
              </td>
              <td>10-1460297</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>{t("PC 보안 점검 장치 및 방법")}</td>
              <td>10-0961180</td>
            </tr>

            <tr>
              <td>{t("대한민국")}</td>
              <td>{t("PC 보안 점검 시스템 및 방법")}</td>
              <td>10-0862617</td>
            </tr>
          </table>
        </ul>
      </div>
    </li>
  );
}

export default withHead(
  Patent,
  "(주)원모어시큐리티 - 특허증",
  '세계 최고의 보안기술을 제공하는 "글로벌 보안 유니콘기업"을 목표로 달려가겠습니다.'
);
