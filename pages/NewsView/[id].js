import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import "../../css/NewsView.module.css";
import withHead from "../../components/withHead";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { httpsAgent } from "../../httpsAgentSetting";

function NewView(props) {
  return (
    <>
      <NMain></NMain>
      <ClickMenu4> </ClickMenu4>
      <Detail {...props}></Detail>
    </>
  );
}
export async function getServerSideProps(context) {
  const { locale, query } = context;
  const cookies = context.req.headers.cookie
    ? context.req.headers.cookie.includes("IS_ADMIN=YES")
    : null;
  const { data } = await axios.get(
    "https://omsecurity.kr/oms/api/board/" + query.id + "?lang=" + locale,{
      httpsAgent
    }
  );
  return {
    props: {
      data,
      cookies: cookies,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function NMain() {
  return (
    <div className="newsoms-main">
      <div>
        <h1>News</h1>
      </div>
    </div>
  );
}

function ClickMenu4() {
  const { t } = useTranslation("common");
  return (
    <div className="ClickMenu4">
      <ul className="menu">
        <li>
          <Link href="/News">
            <a>
              <button className="news select">{t("회사소식")}</button>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Detail(props) {
  const { t } = useTranslation("common");
  const { data, cookies } = props;
  const [number, setNumber] = useState(data ? data : []);

  return (
    <div className="detailview">
      <div className="detailviewBox">
        <div className="detailTitle">
          <h2 className="titleKo">{number.title}</h2>
          <h2 className="titleEn">{number.engTitle}</h2>
          <h4>
            <span style={{ marginRight: "10px" }}>{t("[작성자]")}</span>
            {number.writer}
          </h4>
        </div>
        <div
          className="detailtextKo"
          dangerouslySetInnerHTML={{ __html: number.contents }}
        />
        <div
          className="detailtextEn"
          dangerouslySetInnerHTML={{ __html: number.engContents }}
        />
      </div>
      <div className="detailbuttonbox">
        <Link href="/News">
          <a>
            <button>{t("목록")}</button>
          </a>
        </Link>
        {cookies && (
          <Link
            href={{
              pathname: "/Newstext",
              query: {
                state: "modify",
                id: number.id,
              },
            }}
          >
            <a>
              <button className="update">수정하기</button>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default withHead(NewView, "(주)원모어시큐리티 - 회사 소식", "");
