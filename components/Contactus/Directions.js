import React from "react";
import { useTranslation } from "react-i18next";
import "../../css/Directions.module.css";

function Directions(props) {
  const { t } = useTranslation("common");
  return (
    <div className="directions">
      {/* <h3>오시는길</h3> */}

      <div className="directionstextbox">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200.50834309892707!2d127.28687601629649!3d36.47849179705971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357acbaeaca00fc1%3A0x741d90d392353eb5!2z7Iqk66eI7Yq47ZeI67iMIDE!5e0!3m2!1sko!2skr!4v1675045552289!5m2!1sko!2skr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <div className="call">
          <h5>{t("주소")}</h5>
          <p>
            {t("본사 주소")}
            <br></br>
            {t("지사 | 대전광역시 유성구 유성대로 1559, CT센터 518호")}
          </p>

          <h5>{t("이메일")}</h5>
          <p>
            <a href="mailto:master@omsecurity.kr">master@omsecurity.kr</a>
            {/*<br />
            <a href="mailto: freezia@omsecurity.kr">freezia@omsecurity.kr</a>*/}
          </p>

          <h5>{t("대표 전화")}</h5>
          <p>
            <a href="tel:+82 70-4298-3070" className="number">
              070-4298-3070
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Directions;
