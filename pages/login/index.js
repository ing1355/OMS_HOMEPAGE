import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import $ from "jquery";
import "../../css/Login.module.css";
import { message, Input } from "antd";

function Login(props) {
  const { cookies } = props;
  const router = useRouter();
  
  useEffect(() => {
    if (cookies) {
      router.push("/");
    }
  }, []);
  const loginTest = () => {
    axios
      .post("/oms/api/login", {
        id: $("#test_id").val(),
        password: $("#test_pass").val(),
      })
      .then((res) => {
        if (res.data === "success") {
          message.success({
            content: "로그인성공",
          });
          router.push("/");
        }
        if (res.data === "fail") {
          message.error({
            content: "로그인실패",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Loginbox">
      <div className="Login">
        <div>
          <h2>
            <img src={"/assets/logo.png"} alt="원모어시큐리티 로고"></img>
            원모어시큐리티
          </h2>
          <input
            placeholder="아이디를 입력하세요"
            type="text"
            id="test_id"
          ></input>
          <br></br>
          <input
            type="password"
            name="pass"
            placeholder="비밀번호를 입력하세요"
            id="test_pass"
            onKeyPress={(e) => {
              if (e.key === "Enter") loginTest();
            }}
          />
          <button type="button" onClick={loginTest}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie
    ? context.req.headers.cookie.includes("IS_ADMIN=YES")
    : null;
  return {
    props: {
      cookies: cookies,
    },
  };
}

export default Login;
