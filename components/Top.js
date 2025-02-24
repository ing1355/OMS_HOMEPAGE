import React, { useEffect } from "react";
import $ from "jquery";
import '../css/Top.module.css';

function Top() {
  useEffect(() => {
    $(function () {
      $(".Top button").hide();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          // 스크롤 내릴 표시
          $(".Top button").fadeIn();
        } else {
          $(".Top button").fadeOut();
        }
      });

      $(".Top button").click(function () {
        window.scrollTo(0, 0);
      });
    });
  });

  return (
    <div className="Top">
      <button>Top</button>
    </div>
  );
}

export default Top;
