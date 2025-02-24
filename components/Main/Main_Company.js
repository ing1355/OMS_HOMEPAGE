import { useTranslation } from "next-i18next";
import React from "react";

function Main_Company(props) {
  const { t } = useTranslation("common");
  return (
    <div className="Company">
      <div className="Company-box">
        <p>
          {t("원모어시큐리티는 차별화된 솔루션 공급을 통해")}
          <span style={{ color: "#fff" }}>
            {" "}
            {t("디지털 혁신을 만들어 나가겠습니다.")}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Main_Company;
