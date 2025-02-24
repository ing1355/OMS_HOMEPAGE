import React from "react";
import "../../css/Privacypolicy.module.css";

import withHead from "../../components/withHead";
function Privacypolicy() {
  return (
    <div className="privacypolicy">
      <div className="scenario">
        <h1>
          <img
            className="missingmomLogo"
            src={"/assets/missingmomLogo.png"}
          ></img>
          미씽맘
        </h1>
        <h2>◑ 개인정보 수집 동의</h2>
        <div>
          <img
            src={"/assets/missingmomimg6.png"}
            alt="미씽맘 개인정보 수집 동의"
          ></img>
        </div>
        {/* <Link href="/Missingmom">
          <p className="go">미씽맘 솔루션</p>
        </Link> */}
      </div>
    </div>
  );
}

export default withHead(
  Privacypolicy,
  "(주)원모어시큐리티 - 미씽맘",
  "미아·치매노인 찾기를 위한 시민 참여형 서비스."
);
