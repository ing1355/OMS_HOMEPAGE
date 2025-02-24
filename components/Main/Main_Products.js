import { useTranslation } from "next-i18next";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import Link from "next/link";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Main_Products() {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="products">
        <h2 className="products-Title">Products</h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={70}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
          id="Products-slide"
        >
          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                  <Link href="/Omeye">
                  <span>
                  <img
                    className="pImg koImg"
                    src={"/assets/OMEYE.png"}
                    alt="원모어아이 자세히보기"
                  />
                  <img
                    className="pImg enImg"
                    src={"/assets/OMEYEEn.png"}
                    alt="원모어아이 자세히보기"
                  />
                <h2>{t("원모어아이")}</h2>
                <p>{t("지능형 영상분석 올인원 안전 플랫폼")}</p>
                </span>
                  </Link>
                <Link href="/Omeye">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <Link href="/Missingmom">
                  <span>
                    <img
                      className="pImg koImg"
                      src={"/assets/MISSINGMOM.png"}
                      alt="미씽맘 자세히보기"
                    />
                    <img
                      className="pImg enImg"
                      src={"/assets/MISSINGMOMEn.png"}
                      alt="미씽맘 자세히보기"
                    />
                    <h2>{t("미씽맘")}</h2>
                    <p>{t("미아·치매노인 찾기를 위한 시민 참여형 서비스")}</p>
                  </span>
                </Link>
                <Link href="/Missingmom">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <Link href="/Omface">
                  <span>
                    <img
                      className="pImg koImg"
                      src={"/assets/OMFACE.png"}
                      alt="원모어페이스 자세히보기"
                    />
                    <img
                      className="pImg enImg"
                      src={"/assets/OMFACEEn.png"}
                      alt="원모어페이스 자세히보기"
                    />
                    <h2>{t("원모어페이스")}</h2>
                    <p>{t("딥러닝 기반 얼굴인식 솔루션")}</p>
                  </span>
                </Link>
                <Link href="/Omface">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <Link href="/Ompass">
                  <span>
                    <img
                      className="pImg koImg"
                      src={"/assets/OMPASS.png"}
                      alt="원모어패스 자세히보기"
                    />
                    <img
                      className="pImg enImg"
                      src={"/assets/OMPASSEn.png"}
                      alt="원모어패스 자세히보기"
                    />
                    <h2>{t("원모어패스")}</h2>
                    <p>{t("차세대 통합 인증 솔루션")}</p>
                  </span>
                </Link>
                <Link href="/Ompass">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText" herf="/Scapsule">
                <img
                  className="pImg koImg"
                  src={"/assets/SCAPSULE.png"}
                  alt="에스캡슐 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/SCAPSULEEn.png"}
                  alt="에스캡슐 자세히보기"
                />
                <h2>{t("에스캡슐")}</h2>
                <p>{t("주요정보 유출방지 올인원 솔루션")}</p>
                <Link href="/Scapsule">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide> */}

          {/*<SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText">
                <Link href="/Pc4">
                  <span>
                    <img
                      className="pImg koImg"
                      src={"/assets/PC.png"}
                      alt="내PC지키미 4.0 자세히보기"
                    />
                    <img
                      className="pImg enImg"
                      src={"/assets/PCEn.png"}
                      alt="내PC지키미 4.0 자세히보기"
                    />
                    <h2>{t("내PC지키미 4.0")}</h2>
                    <p>{t("PC 보안 취약점 진단 및 조치 솔루션")}</p>
                  </span>
                </Link>
                <Link href="/Pc4">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText">
                <Link href="/Secureprint">
                  <span>
                    <img
                      className="pImg koImg"
                      src={"/assets/SECUREPRINT.png"}
                      alt="오엠에스 시큐어 프린트 자세히보기"
                    />
                    <img
                      className="pImg enImg"
                      src={"/assets/SECUREPRINTEn.png"}
                      alt="오엠에스 시큐어 프린트 자세히보기"
                    />
                    <h2>{t("오엠에스 시큐어 프린트")}</h2>
                    <p>{t("출력제어 솔루션")}</p>
                  </span>
                </Link>
                <Link href="/Secureprint">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide> */}

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText">
                <Link href="/Omscode">
                  <span>
                    <img
                      className="pImg koImg"
                      src={"/assets/OMSCODE.png"}
                      alt="오엠에스 코드 자세히보기"
                    />
                    <img
                      className="pImg enImg"
                      src={"/assets/OMSCODEEn.png"}
                      alt="오엠에스 코드 자세히보기"
                    />
                    <h2>{t("오엠에스 코드")}</h2>
                    <p>{t("문서 위변조 방지 솔루션")}</p>
                  </span>
                </Link>
                <Link href="/Omscode">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          slidesPerView={2}
          spaceBetween={1}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
          id="Products-slide-tabletpc"
        >
          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <img
                  className="pImg koImg"
                  src={"/assets/OMEYE.png"}
                  alt="원모어아이 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/OMEYEEn.png"}
                  alt="원모어아이 자세히보기"
                />
                <h2>{t("원모어아이")}</h2>
                <p>{t("지능형 영상분석 올인원 안전 플랫폼")}</p>
                <Link href="/Omeye">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <img
                  className="pImg koImg"
                  src={"/assets/OMFACE.png"}
                  alt="원모어페이스 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/OMFACEEn.png"}
                  alt="원모어페이스 자세히보기"
                />
                <h2>{t("원모어페이스")}</h2>
                <p>{t("딥러닝 기반 얼굴인식 솔루션")}</p>
                <Link href="/Omface">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <img
                  className="pImg koImg"
                  src={"/assets/MISSINGMOM.png"}
                  alt="미씽맘 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/MISSINGMOMEn.png"}
                  alt="미씽맘 자세히보기"
                />
                <h2>{t("미씽맘")}</h2>
                <p>{t("미아·치매노인 찾기를 위한 시민 참여형 서비스")}</p>
                <Link href="/Missingmom">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <img
                  className="pImg koImg"
                  src={"/assets/OMPASS.png"}
                  alt="원모어패스 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/OMPASSEn.png"}
                  alt="원모어패스 자세히보기"
                />
                <h2>{t("원모어패스")}</h2>
                <p>{t("차세대 통합 인증 솔루션")}</p>
                <Link href="/Ompass">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <img
                  className="pImg koImg"
                  src={"/assets/SCAPSULE.png"}
                  alt="에스캡슐 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/SCAPSULEEn.png"}
                  alt="에스캡슐 자세히보기"
                />
                <h2>{t("에스캡슐")}</h2>
                <p>{t("주요정보 유출방지 올인원 솔루션")}</p>
                <Link href="/Scapsule">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <img
                  className="pImg koImg"
                  src={"/assets/PC.png"}
                  alt="내PC지키미 4.0 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/PCEn.png"}
                  alt="내PC지키미 4.0 자세히보기"
                />
                <h2>{t("내PC지키미 4.0")}</h2>
                <p>{t("PC 보안 취약점 진단 및 조치 솔루션")}</p>
                <Link href="/Pc4">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <img
                  className="pImg koImg"
                  src={"/assets/SECUREPRINT.png"}
                  alt="오엠에스 시큐어 프린트 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/SECUREPRINTEn.png"}
                  alt="오엠에스 시큐어 프린트 자세히보기"
                />
                <h2>{t("오엠에스 시큐어 프린트")}</h2>
                <p>{t("출력제어 솔루션")}</p>
                <Link href="/Secureprint">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide> */}

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <div className="productsText">
                <img
                  className="pImg koImg"
                  src={"/assets/OMSCODE.png"}
                  alt="오엠에스 코드 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/OMSCODEEn.png"}
                  alt="오엠에스 코드 자세히보기"
                />
                <h2>{t("오엠에스 코드")}</h2>
                <p>{t("문서 위변조 방지 솔루션")}</p>
                <Link href="/Omscode">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
          id="Products-slide-tablet"
        >
          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText" href="/Omeye">
                <img
                  className="pImg koImg"
                  src={"/assets/OMEYE.png"}
                  alt="원모어아이 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/OMEYEEn.png"}
                  alt="원모어아이 자세히보기"
                />
                <h2>{t("원모어아이")}</h2>
                <p>{t("지능형 영상분석 올인원 안전 플랫폼")}</p>
                <Link href="/Omeye">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText" href="/Omface">
                <img
                  className="pImg koImg"
                  src={"/assets/OMFACE.png"}
                  alt="원모어페이스 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/OMFACEEn.png"}
                  alt="원모어페이스 자세히보기"
                />
                <h2>{t("원모어페이스")}</h2>
                <p>{t("딥러닝 기반 얼굴인식 솔루션")}</p>
                <Link href="/Omface">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText" href="/Missingmom">
                <img
                  className="pImg koImg"
                  src={"/assets/MISSINGMOM.png"}
                  alt="미씽맘 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/MISSINGMOMEn.png"}
                  alt="미씽맘 자세히보기"
                />
                <h2>{t("미씽맘")}</h2>
                <p>{t("미아·치매노인 찾기를 위한 시민 참여형 서비스")}</p>
                <Link href="/Missingmom">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText" href="/Ompass">
                <img
                  className="pImg koImg"
                  src={"/assets/OMPASS.png"}
                  alt="원모어패스 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/OMPASSEn.png"}
                  alt="원모어패스 자세히보기"
                />
                <h2>{t("원모어패스")}</h2>
                <p>{t("차세대 통합 인증 솔루션")}</p>
                <Link href="/Ompass">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText" href="/Scpsule">
                <img
                  className="pImg koImg"
                  src={"/assets/SCAPSULE.png"}
                  alt="에스캡슐 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/SCAPSULEEn.png"}
                  alt="에스캡슐 자세히보기"
                />
                <h2>{t("에스캡슐")}</h2>
                <p>{t("주요정보 유출방지 올인원 솔루션")}</p>
                <Link href="/Scapsule">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide> */}

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText" href="/Pc4">
                <img
                  className="pImg koImg"
                  src={"/assets/PC.png"}
                  alt="내PC지키미 4.0 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/PCEn.png"}
                  alt="내PC지키미 4.0 자세히보기"
                />
                <h2>{t("내PC지키미 4.0")}</h2>

                <p>{t("PC 보안 취약점 진단 및 조치 솔루션")}</p>
                <Link href="/Pc4">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText" href="/Secureprint">
                <img
                  className="pImg koImg"
                  src={"/assets/SECUREPRINT.png"}
                  alt="오엠에스 시큐어 프린트 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/SECUREPRINTEn.png"}
                  alt="오엠에스 시큐어 프린트 자세히보기"
                />
                <h2>{t("오엠에스 시큐어 프린트")}</h2>
                <p>{t("출력제어 솔루션")}</p>
                <Link href="/Secureprint">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide> */}

          <SwiperSlide className="pSlider">
            <div className="pSliderBox">
              <a className="productsText" href="/Omscode">
                <img
                  className="pImg koImg"
                  src={"/assets/OMSCODE.png"}
                  alt="오엠에스 코드 자세히보기"
                />
                <img
                  className="pImg enImg"
                  src={"/assets/OMSCODEEn.png"}
                  alt="오엠에스 코드 자세히보기"
                />
                <h2>{t("오엠에스 코드")}</h2>
                <p>{t("문서 위변조 방지 솔루션")}</p>
                <Link href="/Omscode">
                  <p className="go">{t("자세히보기")}</p>
                </Link>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Main_Products;
