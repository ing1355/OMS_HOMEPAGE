import CompanyButton from "../Company/CompanyButton";
import $ from "jquery";
import { CompanyItems } from "../Company/CompanyItems";
import { useEffect } from "react";

function ClickMenu(props) {
  const { cname } = props;
  const compItem = CompanyItems.map((item) => Object.keys(item));
  useEffect(() => {
    $(function () {
      $(".menu button").click(function () {
        $(".menu button").removeClass("select");
        $(this).addClass("select");
      });
    });
  }, []);

  return (
    <div className="ClickMenu">
      {compItem.map((m1, ind) => (
        <ul className="menu" key={ind}>
          {m1.map((m2, ind2) => {
            return <CompanyButton cname={m2} select={cname === m2} key={ind2} />;
          })}
        </ul>
      ))}
    </div>
  );
}

export default ClickMenu
