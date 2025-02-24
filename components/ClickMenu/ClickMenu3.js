import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import $ from 'jquery'

function ClickMenu3(props) {
    const { t } = useTranslation("common");
    const { msg } = props
    useEffect(() => {
        $(function () {
            $(".menu button").click(function () {
                $(".menu button").removeClass("select");
                $(this).addClass("select");
            });
        });
    });

    return (
        <div className="ClickMenu3">
            <ul className="menu">
                <li>
                    <button className="Directionsbutton select">{t(msg)}</button>
                </li>
            </ul>
        </div>
    );
}

export default ClickMenu3