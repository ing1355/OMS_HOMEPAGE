import { useTranslation } from "next-i18next";
import React from "react";

function Main_Title() {
  const { t } = useTranslation("common");
  return (
    <div>
      <header>
      <div className="Main-Img">
        <img src="/assets/footer_logo_nep.png"/>
        <img src="/assets/footer_logo_ppsep.png"/>
        <img src="/assets/footer_logo_innovative.png"/>
      </div>
        <div className="Main-Text">
          <h1>{t("편리하고 안전한 스마트시티 건설을 함께하는,")}</h1>
          <p>
            {t("인공지능·정보보호")}
            <br className="br"></br>
            <span style={{ color: "#fff" }}>{t(" 전문기업")}</span>
            <span
              style={{
                color: "#00b0f0",
                fontSize: "1.5rem",
              }}
            >
              &nbsp;{t("원모어시큐리티")}
            </span>
          </p>
        </div>
      </header>
    </div>
  );
}

export default Main_Title;
