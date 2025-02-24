import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";
import $ from "jquery";

function Main_Brochure(props) {
  // useEffect(() => {
  //   $(function () {
  //     $("#Brochure .box").hide();
  //     $(window).scroll(function () {
  //       if ($(this).scrollTop() > 100) {

  //       } else {
  //         $("#Brochure .box").hide();
  //       }

  //       if ($(this).scrollTop() > 400) {
  //         $("#Brochure .box").fadeIn();
  //       }
  //     });
  //   });
  // }, []);

  const { t } = useTranslation("common");
  return (
    <div className="Brochure" id="Brochure">
      <div className="box">
        <h2 className="Brochure-Title">Brochure</h2>
        <p className="Brochure-Text">
          {t("원모어시큐리티의 솔루션 가이드북을 받아보실 수 있습니다.")}
        </p>
        <a className="koBrochure" href="/pdf/Solution_KR.pdf" download>
          <button className="Brochure-Down">다운받기</button>
        </a>
        <a className="enBrochure" href="/pdf/Solution_En.pdf" download>
          <button
            className="Brochure-Down"
            style={{ textTransform: "capitalize " }}
          >
            Download
          </button>
        </a>
        
      </div>
    </div>
  );
}

export default Main_Brochure;
