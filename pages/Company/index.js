import React from "react";
import withHead from "../../components/withHead";
import "../../css/Company.module.css";
import "../../css/Global_Company.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ClickMenu from "../../components/ClickMenu/ClickMenu";
import CompanyMain from "../../components/Company/CompanyMain";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Company() {
  return (
    <>
      <CompanyMain />
      <ClickMenu cname="Company" />
      <CompInfo />
    </>
  );
}

function CompInfo() {
  const { t } = useTranslation("common");
  return (
    <div>
      <ul className="synopsis">
        <div className="textbox1">
          <li key={"key" + 1}>
            <div>
              <img src={"/assets/ceo.png"} alt="원모어시큐리티 대표이사"></img>
              <p>{t("대표이사")}</p>
            </div>
            <div>
              <h3>{t("김민식")}</h3>
            </div>
          </li>

          <li key={"key" + 2}>
            <div>
              <img
                src={"/assets/building.png"}
                alt="원모어시큐리티 설립일"
              ></img>
              <p>{t("설립일")}</p>
            </div>
            <div>
              <h3>{t("2019년 1월 31일")}</h3>
            </div>
          </li>

          <li key={"key" + 3}>
            <div>
              <img
                src={"/assets/usershield.png"}
                alt="원모어시큐리티 사업분야"
              ></img>
              <p>{t("사업분야")}</p>
            </div>
            <div>
              <h3>{t("정보보호 및 인공지능")}</h3>
            </div>
          </li>
        </div>
      </ul>
      <div className="history">
        <h3>{t("연혁")}</h3>
        <div className="historytextbox">
          <ul>
            <li>
              <h5>2025</h5>
            </li>
            <li>
              <div>
                <p>02 | </p>
                <h6>{t("중소벤처부, 한국마이크로소프트 협업 “마중 프로그램” 우수과제 선정")}</h6>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h5>2024</h5>
            </li>
            <li>
              <div>
                <p>12 | </p>
                <h6>{t("원모어아이 v2.0, KISA K-ICTC 지능형 CCTV 인증 획득 (배회)")}</h6>
              </div>
              <div>
                <p>12 | </p>
                <h6>{t("원모어아이 v2.0, KISA K-ICTC 지능형 CCTV 인증 획득 (침입)")}</h6>
              </div>
              <div>
                <p>12 | </p>
                <h6>{t("원모어아이, 경기도 이천시청 구축 완료")}</h6>
              </div>
              <div>
                <p>12 | </p>
                <h6>{t("원모어아이, 경기도 수원시청 구축 완료")}</h6>
              </div>
              <div>
                <p>11 | </p>
                <h6>{t("캐나다 Sarafin AI와 MOU/NDA 체결")}</h6>
              </div>
              <div>
                <p>11 | </p>
                <h6>{t("원모어아이, 안양시청 구축 완료 (여성 안심 화장실 시스템)")}</h6>
              </div>
              <div>
                <p>11 | </p>
                <h6>{t("원모어아이 v2.0, TTA GS 1등급 획득")}</h6>
              </div>
              <div>
                <p>10 | </p>
                <h6>{t("원모어아이 v2.0, KISA K-ICTC 지능형 CCTV 인증 획득 (방화)")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("원모어아이, 성북구청 구축 완료")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("원모어아이, 금천구청 구축 완료")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("말레이시아 ELIX Solution Sdn Bhd와 MOU 체결")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("과기정통부 장관상 수상 (우수기업 2024)")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("GS건설 오픈이노베이션 우수상 수상")}</h6>
              </div>
              <div>
                <p>08 | </p>
                <h6>{t("원모어아이, 파주시청 구축 완료")}</h6>
              </div>
              <div>
                <p>08 | </p>
                <h6>{t("원모어아이(엣지 디바이스 산업안전용 AI 모듈) 공급")}</h6>
              </div>
              <div>
                <p>07 | </p>
                <h6>{t("조달청 혁신제품 지정 (원모어아이 v2.0)")}</h6>
              </div>
              <div>
                <p>06 | </p>
                <h6>{t("국가보안기술연구소, 구름 OS 2차 인증 적용 사업 선정 (원모어패스)")}</h6>
              </div>
              <div>
                <p>06 | </p>
                <h6>{t("원모어아이, 군산시청 구축 완료")}</h6>
              </div>
              <div>
                <p>06 | </p>
                <h6>{t("행정안전부, CCTV 영상분석 기술실증 공모사업 선정")}</h6>
              </div>
              <div>
                <p>05 | </p>
                <h6>{t("중소벤처부, 한국마이크로소프트 협업 “마중 프로그램” 선정")}</h6>
              </div>
              <div>
                <p>04 | </p>
                <h6>{t("중견기업 ㈜영신디엔씨와 NDA 체결")}</h6>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h5>2023</h5>
            </li>
            <li>
              <div>
                <p>12 | </p>
                <h6>{t("AI+X(AI융합 국민안전 확보 및 신속대응 지원 사업) 우수과제 선정")}</h6>
              </div>
              <div>
                <p>12 | </p>
                <h6>{t("과기정통부 지역SW서비스사업화지원사업 우수과제 선정")}</h6>
              </div>
              <div>
                <p>12 | </p>
                <h6>{t("원모어아이, KISA K-ICTC 지능형 CCTV 인증 획득 (배회, 침입, 유기)")}</h6>
              </div>
              <div>
                <p>12 | </p>
                <h6>{t("산업통상부장관상 수상 (신기술 실용화를 통한 국가산업발전 기여)")}</h6>
              </div>
              <div>
                <p>11 | </p>
                <h6>{t("투자용 기술신용평가 등급 TI-2 등급 획득")}</h6>
              </div>
              <div>
                <p>11 | </p>
                <h6>{t("원모어아이, KISA K-ICTC 지능형 CCTV 인증 획득 (배회, 침입, 쓰러짐)")}</h6>
              </div>
              <div>
                <p>11 | </p>
                <h6>{t("원모어아이, 서대문구청 구축 완료")}</h6>
              </div>
              <div>
                <p>11 | </p>
                <h6>{t("원모어아이, 양천구청 구축 완료")}</h6>
              </div>
              <div>
                <p>10 | </p>
                <h6>{t("원모어아이, KISA K-ICTC 지능형 CCTV 인증 획득 (배회, 침입, 마케팅)")}</h6>
              </div>
              <div>
                <p>10 | </p>
                <h6>{t("원모어아이, 동대문구청 구축 완료")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("내PC지키미 4.0, 우송대학교 구축 완료")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("원모어아이, 서초구청 구축 완료")}</h6>
              </div>
              <div>
                <p>08 | </p>
                <h6>{t("원모어아이, 청주시청 구축 완료")}</h6>
              </div>
              <div>
                <p>08 | </p>
                <h6>{t("원모어패스, SW기반 윈도우즈 운영체제 FIDO 로그온 서비스 런칭 (국내최초)")}</h6>
              </div>
              <div>
                <p>08 | </p>
                <h6>{t("원모어아이, 조달청 나라장터 종합쇼핑몰 입점 (우수조달물품)")}</h6>
              </div>
              <div>
                <p>07 | </p>
                <h6>{t("과학기술정보통신부 장관상 수상 (정보보호 유공)")}</h6>
              </div>
              <div>
                <p>07 | </p>
                <h6>{t("원모어아이, 과학기술정보통신부 장관상 수상 (정보보호제품 혁신대상)")}</h6>
              </div>
              <div>
                <p>06 | </p>
                <h6>{t("원모어아이, 과학기술정보통신부 우수 정보보호기술등 지정")}</h6>
              </div>
              <div>
                <p>06 | </p>
                <h6>{t("원모어아이, KISA K-ICTC 지능형 CCTV 인증 획득  (배회, 침입, 방화)")}</h6>
              </div>
              <div>
                <p>06 | </p>
                <h6>{t("아이티센그룹의 (주)투케이엠과 파트너 계약 체결")}</h6>
              </div>
              <div>
                <p>06 | </p>
                <h6>{t("베트남 Vinafore Informatics and Telecommunication JSC 와 MOU/NDA 체결")}</h6>
              </div>
              <div>
                <p>05 | </p>
                <h6>{t("UAE Eurostar Communication LLC와 MOU/NDA 체결")}</h6>
              </div>
              <div>
                <p>05 | </p>
                <h6>{t("중소벤처기업부 창업도약패키지 사업 선정")}</h6>
              </div>
              <div>
                <p>05 | </p>
                <h6>{t("과기정통부 AI+X 사업 선정")}</h6>
              </div>
              <div>
                <p>05 | </p>
                <h6>{t("원모어패스, 조달 3자 단가계약 체결 [식별번호 24327578, 24327579, 24327580, 24327581]")}</h6>
              </div>
              <div>
                <p>04 | </p>
                <h6>{t("원모어아이, 조달청 우수제품 지정")}</h6>
              </div>
              <div>
                <p>03 | </p>
                <h6>{t("대전 서구청, 지능형 부정주차 관리 플랫폼 개발 및 실증 완료")}</h6>
              </div>
              <div>
                <p>01 | </p>
                <h6>{t("도시재생안전협회 회원사 등록")}</h6>
              </div>
              <div>
                <p>01 | </p>
                <h6>{t("CES 2023 부스 참가")}</h6>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h5>2022</h5>
            </li>
            <li>
              <div>
                <p>12 | </p>
                <h6>{t("원모어아이, NEP(신제품) 인증 획득")}</h6>
              </div>
              <div>
                <p>11 | </p>
                <h6>{t("원모어아이 스마트시티 통합플랫폼 TTA 인증 획득")}</h6>
              </div>
              <div>
                <p>11 | </p>
                <h6>{t("인도네시아 Qurum Nusa Prestasi와 MOU/NDA 체결")}</h6>
              </div>
              <div>
                <p>10 | </p>
                <h6>{t("대한민국 발명특허대전 중소기업 중앙회장상 수상")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("해외조달시장 진출유망기업(G-PASS 기업) 지정")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("세계한인무역협회와 MOU 체결")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("원모어아이, 과기정통부 장관상 수상")}</h6>
              </div>
              <div>
                <p>08 | </p>
                <h6>{t("한국원자력통제기술원, 원모어패스와 오엠에스 시큐어 프린트 구매 체결")}</h6>
              </div>
              <div>
                <p>08 | </p>
                <h6>{t("한진정보통신(주)와 MOU 체결")}</h6>
              </div>
              <div>
                <p>08 | </p>
                <h6>{t("원모어아이, 2022 월드 스마트시티 엑스포 스마트시티 솔루션 부문 어워즈 수상")}</h6>
              </div>
              <div>
                <p>08 | </p>
                <h6>{t("원모어패스 (클라우드), NIPA 클라우드컴퓨팅서비스 품질·성능 확인서 획득")}</h6>
              </div>
              <div>
                <p>07 | </p>
                <h6>{t("이노비즈(기술혁신형 중소기업) 선정")}</h6>
              </div>
              <div>
                <p>07 | </p>
                <h6>{t("원모어페이스 v2.0, KISA K-NBTC 얼굴인증 획득(정확도 99.98%)")}</h6>
              </div>
              <div>
                <p>06 | </p>
                <h6>{t("원모어아이, TTA GS 1등급 획득")}</h6>
              </div>
              <div>
                <p>05 | </p>
                <h6>{t("과기정통부 AI+X 사업 수주")}</h6>
              </div>
              <div>
                <p>05 | </p>
                <h6>{t("한진정보통신(주) NDA 체결")}</h6>
              </div>
              <div>
                <p>05 | </p>
                <h6>{t("베트남 SAVIS Technology Group과 NDA 체결")}</h6>
              </div>
              <div>
                <p>04 | </p>
                <h6>
                  {t(
                    "과기정통부 지역SW서비스사업화지원사업 수주"
                  )}
                </h6>
              </div>
              <div>
                <p>04 | </p>
                <h6>
                  {t(
                    "원모어패스 (클라우드), AWS 클라우드 기반 구독형 서비스 런칭"
                  )}
                </h6>
              </div>
              <div>
                <p>02 | </p>
                <h6>
                  {t(
                    "조달청 혁신제품(원모어아이) 구매계약 확정(대상：송파구청, 태백시청)"
                  )}
                </h6>
              </div>
            </li>
          </ul>

          <ul>
            <li>
              <h5>2021</h5>
            </li>
            <li>
              <div>
                <p>12 | </p>
                <h6>{t("한미헬스케어 오엠에스 코드 구매 체결")}</h6>
              </div>
              <div>
                <p>12 | </p>
                <h6>
                  {t("조달청 혁신제품 지정(원모어아이 v1.0, 미씽맘 v1.0)")}
                </h6>
              </div>
              <div>
                <p>12 | </p>
                <h6>{t("한국거래소 KSM 등록")}</h6>
              </div>
              <div>
                <p>12 | </p>
                <h6>{t("탄자니아 TechnoPro Africa와 MOU & NDA 체결")}</h6>
              </div>
              <div>
                <p>11 | </p>
                <h6>{t("(주)코맥스 NDA 체결")}</h6>
              </div>
              <div>
                <p>10 | </p>
                <h6>{t("연구개발특구진흥재단, OMPASS 구매 체결")}</h6>
              </div>
              <div>
                <p>10 | </p>
                <h6>{t("미아-치매노인 찾기 서비스, 제2회 강서구 스마트도시 아이디어 공모전 우수상 수상")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("미국 We-Bridge Worlds와 MOU 체결")}</h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>
                  {t(
                    "Edunet Network Company Ltd와 MOU & NDA 체결"
                  )}
                </h6>
              </div>
              <div>
                <p>09 | </p>
                <h6>{t("미국 PnP(Plug and Play) Goal Program 참여")}</h6>
              </div>
              <div>
                <p>08 | </p>
                <h6>{t("국가보안기술연구소 패밀리기업 지정")}</h6>
              </div>
              <div>
                <p>07 | </p>
                <h6>
                  {t("과기정통부 과학벨트 기능지구 R&D 사업 수주")}
                </h6>
              </div>
              <div>
                <p>07 | </p>
                <h6>
                  {t("˝ICT 중소기업 보안솔루션 지원사업˝ 공급 기업 선정")}
                </h6>
              </div>
              <div>
                <p>04 | </p>
                <h6>{t("LG CNS와 NDA 체결")}</h6>
              </div>
              <div>
                <p>04 | </p>
                <h6>{t("원모어패스, TTA GS 1등급 획득")}</h6>
              </div>
              <div>
                <p>03 | </p>
                <h6>{t("원모어패스, FIDO Alliance 국제 인증 획득")}</h6>
              </div>
              <div>
                <p>03 | </p>
                <h6>{t("기보벤처캠프 8기 선정")}</h6>
              </div>
              <div>
                <p>02 | </p>
                <h6>{t("FIDO Alliance 회원사 등록")}</h6>
              </div>
              <div>
                <p>01 | </p>
                <h6>
                  {t("오엠에스 내PC지키미 4.0, 조달청 나라장터 종합쇼핑몰 입점")}
                </h6>
              </div>
            </li>
          </ul>

          <ul>
            <li>
              <h5>2020</h5>
            </li>
            <li>
              <div>
                <p>11 | </p>
                <h6>
                  {t("한국인터넷진흥원 K-NBTC 얼굴인증 획득(정확도：99.96%)")}
                </h6>
              </div>

              <div>
                <p>10 | </p>
                <h6>
                  {t("중소벤처기업부 디딤돌창업비대면 사업 수주")}
                </h6>
              </div>

              <div>
                <p>09 | </p>
                <h6>
                  {t(
                    "중소벤처부 ˝비대면 서비스(보안분야) 바우처 공급기업˝ 선정"
                  )}
                </h6>
              </div>

              <div>
                <p>09 | </p>
                <h6>{t("오엠에스 내PC지키미 4.0, TTA GS 1등급 획득")}</h6>
              </div>

              <div>
                <p>08 | </p>
                <h6>
                  {t("중소벤처부 ˝시범구매제품˝ 지정(에스캡슐 v1.0)")}
                </h6>{" "}
              </div>

              <div>
                <p>08 | </p>
                <h6>
                  {t("조달청 벤처창업혁신조달상품 지정(오엠에스 시큐어 프린트 v1.0)")}
                </h6>
              </div>

              <div>
                <p>06 | </p>
                <h6>{t("한국전자통신연구원(ETRI) E-패밀리기업 인정")}</h6>
              </div>

              <div>
                <p>05 | </p>
                <h6>{t("중소벤처기업부 국가융복합단지 연계 지역기업 상용화 R&D 사업 수주")}</h6>
              </div>

              <div>
                <p>03 | </p>
                <h6>{t("오엠에스 시큐어 프린트 v1.0, TTA GS 1등급 획득")}</h6>
              </div>

              <div>
                <p>03 | </p> <h6>{t("한국정보보호산업협회 회원사 등록")}</h6>
              </div>
            </li>
          </ul>

          <ul>
            <li>
              <h5>2019</h5>
            </li>
            <li>
              <div>
                <p>12 | </p>
                <h6>
                  {t(
                    "조달청 벤처창업혁신조달상품 지정(에스캡슐 v1.0 ＆ 오엠에스 코드 v1.0)"
                  )}
                </h6>
              </div>
              <div>
                <p> 12 | </p>
                <h6>{t("에스캡슐 v1.0, TTA GS 1등급 획득")}</h6>
              </div>

              <div>
                <p>10 | </p>
                <h6>{t("오엠에스 코드 v1.0, TTA GS 1등급 획득")}</h6>
              </div>

              <div>
                <p>09 | </p>
                <h6>{t("중소벤처기업부 초기창업패키지 사업 수주")}</h6>
              </div>

              <div>
                <p>09 | </p>
                <h6>{t("세종 T 창업벤처 육성 기업 선정")}</h6>
              </div>

              <div>
                <p>06 | </p>
                <h6>{t("중소벤처기업부 디딤돌창업첫걸음 사업 수주")}</h6>
              </div>

              <div>
                <p>06 | </p>
                <h6>{t("기술보증기금 Tech밸리 지원기업 선정")}</h6>
              </div>

              <div>
                <p>06 | </p>
                <h6>{t("한국클라우드사업협동조합 회원사 등록")}</h6>
              </div>

              <div>
                <p>05 | </p>
                <h6>{t("벤처기업 승인")}</h6>
              </div>

              <div>
                <p>04 | </p>
                <h6>{t("기업 부설연구소 설립")}</h6>
              </div>
              <div>
                <p>01 | </p>
                <h6>{t("˝국가보안기술연구소 연구원 창업기업˝으로 설립")}</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withHead(
  Company,
  "(주)원모어시큐리티 - 회사개요",
  "세계 최고의 보안기술을 제공하는 ˝글로벌 보안 유니콘기업˝을 목표로 달려가겠습니다."
);
