import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import "../../css/News.module.css";
import { Popconfirm, message, Button, Pagination } from "antd";
import withHead from "../../components/withHead";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { httpsAgent } from "../../httpsAgentSetting";

function News(props) {
  return (
    <>
      <NMain></NMain>
      <ClickMenu4> </ClickMenu4>
      <Omsnew {...props}></Omsnew>
    </>
  );
}

export async function getServerSideProps(context) {
  const { locale } = context;
  
  const cookies = context.req.headers.cookie
    ? context.req.headers.cookie.includes("IS_ADMIN=YES")
    : null;
  
  const {data} = await axios.get("https://omsecurity.kr/oms/api/boards?lang=" + locale, {
    httpsAgent
  });
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

function ClickMenu4(props) {
  const { t } = useTranslation("common");
  return (
    <div className="ClickMenu4">
      <ul className="menu">
        <li>
          <button className="news select">{t("회사소식")}</button>
        </li>
      </ul>
    </div>
  );
}
// ====================================================
// ====================================================
// ====================================================

function Omsnew(props) {
  const { t } = useTranslation("common");
  const { data, cookies } = props;
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [number, setNumber] = useState(data ? data : []);
  const reMove = (id) => {
    axios.delete("/oms/api/board/" + id, {
      httpsAgent
    }).then((res) => {
      if (res.data === "") {
        setNumber(
          number.filter((number) => {
            return number.id !== id;
          })
        );

        message.info({
          content: "삭제되었습니다.",
          style: {
            marginTop: "5vh",
          },
        });
      }
      if (res.data === "no permission") {
        message.error({
          content: "삭제실패(권한이 없습니다.)",
          className: "custom-class",
          style: {
            marginTop: "5vh",
          },
        });
      }
    });
  };

  return (
    <div className="Newbox">
      {/* <h3 className="newh3">회사소식</h3> */}

      <table className="newstable">
        <tr className="newtitle">
          <td className="number">{t("번호")}</td>
          <td className="title" id="title">
            {t("제목")}
          </td>
          <td className="name">{t("작성자")}</td>
          <td className="day">{t("작성일")}</td>
        </tr>
        {number.slice((page - 1) * 10, 10 * page).map((tableData, index) => {
          return (
            <tr key={tableData.toString() + index}>
              <td className="number">
                {number.length - (10 * (page - 1) + index)}
              </td>
              <td className="title">
                <Link
                  href={{
                    pathname: `NewsView/${tableData.id}`,
                  }}
                >
                  <a>{tableData.title}</a>
                </Link>
              </td>
              <td className="name">{tableData.writer}</td>
              <td className="day">{tableData.created_at.split("T")[0]}</td>
              {cookies && (
                <td className="del">
                  <Popconfirm
                    placement="top"
                    title={"삭제하시겠습니까"}
                    onConfirm={() => {
                      reMove(tableData.id);
                    }}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button>삭제</Button>
                  </Popconfirm>
                </td>
              )}
            </tr>
          );
        })}
      </table>
      {cookies && (
        <div className="writeButton">
          <Link
            href={{
              pathname: "Newstext",
            }}
          >
            <a className="write">
              <button>글쓰기</button>
            </a>
          </Link>
        </div>
      )}
      <div className="paginationBox">
        <Pagination
          className="pagination"
          defaultCurrent={1}
          pageSize={pageSize}
          current={page}
          onChange={(e) => {
            setPage(e);
          }}
          total={number.length}
        />
      </div>
    </div>
  );
}

export default withHead(News, "(주)원모어시큐리티 - 회사 소식", "");
