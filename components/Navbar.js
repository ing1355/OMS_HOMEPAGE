import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.module.css";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import $ from "jquery";

const Navbar = () => {
  const router = useRouter();
  useEffect(() => {
    $(".dropDown_bg").hide();

    $(window)
      .resize(function () {
        var width = $(window).width();
        if (width <= 1024) {
          $(".menuList, .dropDown_bg").hide();
          $(".menuList li").click(function () {
            $(".menuList, .dropDown_bg").show();
          });
        } else {
          $(".menuList").show();
          $(".menuList li").show();
        }
      })
      .resize();
  });
  return (
    <div className="nav_Box">
      <nav>
        <ul className="logo-div">
          <li className="Oms_logo">
            <Link href="/" passHref>
              <Nav.Link>
                <img
                  className="logo"
                  src={"/assets/logo.png"}
                  alt="원모어시큐리티"
                />
              </Nav.Link>
            </Link>
          </li>
          <li className="Oms_logo">
            <img
              className="ksmlogo langko"
              src={"/assets/KSM_Logo.png"}
              alt="KSM 로고"
            />
            <img
              className="ksmlogo langen"
              src={"/assets/KSM_Logo_eng.png"}
              alt="KSM 로고"
            />
          </li>
        </ul>

        <ul className="menuList">
          <li>
            <Link href="/Company" passHref>
              <a>Company</a>
            </Link>
          </li>
          <li>
            <Link href="/Omeye" passHref>
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/News" passHref>
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/Contactus" passHref>
              <a>Contact us</a>
            </Link>
          </li>
          <li>
            <Link href="/Partners" passHref>
              <a>Partners</a>
            </Link>
          </li>
        </ul>
        <ul className="lang">
          <li className="language">
            <Link
              href={{
                pathname: Object.keys(router.query).length
                  ? `${router.query.id}`
                  : "",
              }}
              locale="ko"
              passHref
            >
              <a className="langkobutton">KO</a>
            </Link>
          </li>

          <li className="language" style={{ color: "#5ea3c0" }}>
            |
          </li>

          <li className="language">
            <Link
              href={{
                pathname: Object.keys(router.query).length
                  ? `${router.query.id}`
                  : "",
              }}
              locale="en"
              passHref
            >
              <a className="langenbutton">EN</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="dropDown">
            <button
              onClick={() => {
                $(".menuList, .dropDown_bg").slideToggle();
              }}
            >
              <img
                className="dropDownImg"
                src={"/assets/bars.png"}
                alt="원모어시큐리티"
              ></img>
            </button>
          </li>
        </ul>
      </nav>
      <div className="dropDown_bg"></div>
    </div>
  );
};

export default Navbar;
