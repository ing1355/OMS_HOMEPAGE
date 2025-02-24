import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";
import "../../css/Newstext.module.css";
import $ from "jquery";
import { message } from "antd";
import Link from "next/link";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { httpsAgent } from "../../httpsAgentSetting";

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
dynamic(() => import("suneditor/dist/css/suneditor.min.css"), { ssr: false });
function Viewtext(props) {
  const { data } = props;
  const router = useRouter();
  const editorRef = useRef(null);
  const editorEnRef = useRef(null);

  const getSunEditorInstance = (sunEditor) => {
    editorRef.current = sunEditor;
    if (router.query.state) sunEditor.setContents(data.contents);
  };

  const getSunEditorInstanceEn = (sunEditor) => {
    editorEnRef.current = sunEditor;
    if (router.query.state) sunEditor.setContents(data.engContents);
  };

  const upload = () => {
    if (router.query.state) {
      const sendObj = {
        id: data.id,
        title: $(".title").val(),
        contents: editorRef.current.getContents(),
        writer: $(".writer").val(),
        engTitle: $(".engTitle").val(),
        engContents: editorEnRef.current.getContents(),
      };
      axios
        .put("/oms/api/board", sendObj)

        .then((res) => {
          if (res.data === "") {
            message.success({
              content: "수정되었습니다.",
            });
            router.push("/News");
          }
          if (res.data === "no permission") {
            message.error({
              content: "접근권한 실패! 로그인하세요.",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("/oms/api/board", {
          title: $(".title").val(),
          contents: editorRef.current.getContents(),
          writer: $(".writer").val(),
          engTitle: $(".engTitle").val(),
          engContents: editorEnRef.current.getContents(),
        })
        .then((res) => {
          if (res.data === "success") {
            message.success({
              content: "업로드되었습니다.",
            });

            router.push("/News");
          }
          if (res.data === "no permission") {
            message.error({
              content: "접근권한 실패! 로그인하세요.",
            });
          }
        });
    }
  };

  return (
    <div className="Newstext">
      <div className="Newsbox">
        <h2>{router.query.state ? "게시판 수정하기" : "게시판 글쓰기"}</h2>
        <div className="detailTitle">
          <ul>
            <label>
              <p>한글 제목</p>
              <input
                id="title"
                className="title post_subject"
                name="title"
                type="text"
                placeholder="제목을 입력하세요."
                defaultValue={router.query.state ? data.title : null}
              ></input>
            </label>
            <label>
              <p>작성자</p>
              <input
                id="writer"
                className="writer post_subject"
                name="contents"
                type="text"
                placeholder="작성자"
                defaultValue={router.query.state ? data.writer : null}
              ></input>
            </label>

            <SunEditor
              height="50%"
              id="SunEditor"
              className="SunEditor"
              getSunEditorInstance={getSunEditorInstance}
              setOptions={{
                buttonList: [
                  [
                    "font",
                    "fontSize",
                    "formatBlock",
                    "paragraphStyle",
                    "bold",
                    "underline",
                    "italic",
                    "blockquote",
                    "strike",
                    "subscript",
                    "superscript",
                    "fontColor",
                    "hiliteColor",
                    "textStyle",
                    "removeFormat",
                  ],

                  [
                    "outdent",
                    "indent",
                    "align",
                    "horizontalRule",
                    "list",
                    "table",
                    "link",
                    "image",
                    "video",
                    "undo",
                    "redo",
                  ],
                ],
              }}
            />
          </ul>
          <ul>
            <label className="engLabel">
              <p>영문 제목</p>
              <input
                id="engTitle"
                className="engTitle post_subject"
                name="engTitle"
                type="contents"
                placeholder="제목을 입력하세요."
                defaultValue={router.query.state ? data.engTitle : null}
              ></input>
            </label>
            <SunEditor
              height="50%"
              id="SunEditorEn"
              className="SunEditor"
              getSunEditorInstance={getSunEditorInstanceEn}
              setOptions={{
                buttonList: [
                  [
                    "font",
                    "fontSize",
                    "formatBlock",
                    "paragraphStyle",
                    "bold",
                    "underline",
                    "italic",
                    "blockquote",
                    "strike",
                    "subscript",
                    "superscript",
                    "fontColor",
                    "hiliteColor",
                    "textStyle",
                    "removeFormat",
                  ],

                  [
                    "outdent",
                    "indent",
                    "align",
                    "horizontalRule",
                    "list",
                    "table",
                    "link",
                    "image",
                    "video",
                    "undo",
                    "redo",
                  ],
                ],
              }}
            />
          </ul>
        </div>

        <div className="Newstextbutton">
          {/* <a href="./Newsoms"> */}
          <button onClick={upload} style={{ backgroundColor: "#f39531" }}>
            {router.query.state ? "수정하기" : "업로드"}
          </button>
          {/* </a> */}

          {/* <a href="/NewsView">
            <button>취소</button>
          </a> */}

          <Link
            href={{
              pathname: router.query.state ? "/NewsView" : "/News",
              query: {
                id: router.query.id ? router.query.id : null,
              },
            }}
          >
            <a>
              <button>취소</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query, locale }) {
  if (query.state) {
    const { data } = await axios.get(
      "https://omsecurity.kr/oms/api/board/" + query.id + "?lang=" + locale,
      {
        httpsAgent
      }
    );
    return {
      props: {
        data,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } else {
    return {
      props: {},
    };
  }
}

export default Viewtext;
