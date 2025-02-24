import { useTranslation } from "next-i18next";
import React from "react";

function Footer() {
  const { t } = useTranslation("common");
  return (
    <div className="Footer">
      <div className="Footer-box">
        <div className="footerLeft">
          <h4 className="Footer-Title">{t("(주)원모어시큐리티")}</h4>
          <p
            style={{ marginTop: "30px" }}
            className="Footer-Text"
            id="Footer-Text1"
          >
            {t(
              "본사 주소"
            )}
          </p>
          <p
            style={{ marginTop: "10px" }}
            className="Footer-Text"
            id="Footer-Text2"
          >
            {t("지사 | 대전광역시 유성구 유성대로 1559, CT센터 518호")}
          </p>
          <p className="Footer-Text">
            <a
              className="footerA Footer-Text footerFirst"
              style={{ textDecoration: "none", color: "#fff" }}
              href="tel:+82 70-4298-3070"
            >
              {t("TEL ː +82 70 4298 3070")}
            </a>
            <a
              className="footerA Footer-Text"
              style={{ textDecoration: "none", color: "#fff" }}
              href="mailto:master@omsecurity.kr"
            >
              {t("E-Mail ː master@omsecurity.kr")}
            </a>
          </p>
        </div>
        <div className="footerRight">
          <img src="/assets/footer_logo_ppsep.png"/>
          <img src="/assets/footer_logo_nep.png"/>
          <span>
            <img className="koImg" src="/assets/footer_logo_MSIT.png"/>
            <img className="enImg" src="/assets/footer_logo_MSITEn.png"/>
          </span>
          <img src="/assets/footer_logo_innovative.png"/>
          <img src="/assets/footer_logo_KICTC.png"/>
          <img src="/assets/footer_logo_kNBTC.png"/>
          <img src="/assets/footer_logo_venturein.png"/>
          <img src="/assets/footer_logo_nipa.png"/>
          <span>
            <img className="koImg" src="/assets/footer_logo_tta1.png"/>
            <img className="enImg" src="/assets/footer_logo_tta1_en.png"/>
          </span>
          <img src="/assets/footer_logo_fido.png"/>
          <img src="/assets/footer_logo_innobiz.png"/>
          <img src="/assets/footer_logo_gPass.png"/>
        </div>
        <p className="Footer-Subtext">
          © OneMoreSecurity Inc. All Rights Reserved.
        </p>

      </div>
    </div>
  );
}

export default Footer;
