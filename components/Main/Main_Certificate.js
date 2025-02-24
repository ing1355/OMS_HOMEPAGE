import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

const Main_Certificate = (props) => {
  const { t } = useTranslation("common");
  return (
    <div className="Recentpost">
      <h2 className="Recentpost-Title">Certificates </h2>

      <div className="Recentpost-box">
        <div>
          <a href="/Certificate">
            <img
              src={"/assets/인증서.png"}
              alt="원모어시큐리티 보유 인증서 및 등록증"
            ></img>
            <p>{t("인증서 & 등록증")}</p>
          </a>
          <Link href="/Certificate">
            <p className="go">{t("자세히보기")}</p>
          </Link>
        </div>

        <div style={{ borderLeft: " 1px solid rgba(0, 0, 0, 0.2)" }}>
          <a href="/Patent">
            <img
              src={"/assets/특허.png"}
              alt="원모어시큐리티 보유 특허증"
            ></img>
            <p>{t("특허증")}</p>
          </a>
          <Link href="/Patent">
            <p className="go">{t("자세히보기")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main_Certificate;
