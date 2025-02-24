import React from "react";
import { useTranslation } from "next-i18next";
import "../../css/Partners.css";
import { Divider } from "antd";

function PartnerList(props) {
    const { t } = useTranslation("common");
    return (
        <div className="partnerList">
            <h5>
                {t("원모어시큐리티의 주요 고객 및 국내외 파트너사를 소개합니다.")}
                </h5>
            <div className="grid">
                <span className="items">
                    <figure>
                        <img src="/assets/수원시청로고.png"/>
                    </figure>
                    <p>
                    {t("수원시청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/서초구청로고.png"/>
                    </figure>
                    <p>
                    {t("서초구청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/동대문구청로고.png"/>
                    </figure>
                    <p>
                    {t("동대문구청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/서대문구청로고.jpg"/>
                    </figure>
                    <p>
                    {t("서대문구청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/양천구청로고.jpg"/>
                    </figure>
                    <p>
                    {t("양천구청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/금천구청로고.png"/>
                    </figure>
                    <p>
                    {t("금천구청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/성북구청로고.png"/>
                    </figure>
                    <p>
                    {t("성북구청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/송파구청로고.jpg"/>
                    </figure>
                    <p>
                    {t("송파구청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/태백시청로고.jpg"/>
                    </figure>
                    <p>
                    {t("태백시청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/청주시청로고.jpg"/>
                    </figure>
                    <p>
                    {t("청주시청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/군산시청로고.jpg"/>
                    </figure>
                    <p>
                    {t("군산시청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/파주시청로고.jpg"/>
                    </figure>
                    <p>
                    {t("파주시청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/이천시청로고.png"/>
                    </figure>
                    <p>
                    {t("이천시청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/안양시청로고.jpg"/>
                    </figure>
                    <p>
                    {t("안양시청")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/행정안전부로고.jpg"/>
                    </figure>
                    <p>
                    {t("행정안전부")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/국가정보원로고.jpg"/>
                    </figure>
                    <p>
                    {t("국가정보원")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/국가보안기술연구소로고.png"/>
                    </figure>
                    <p>
                    {t("국가보안기술연구소")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/연구개발특구진흥재단로고.png"/>
                    </figure>
                    <p>
                    {t("연구개발특구진흥재단")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/한국원자력통제기술원.jpg"/>
                    </figure>
                    <p>
                    {t("한국원자력통제기술원")}
                    </p>
                </span>              
                <span className="items">
                    <figure>
                        <img src="/assets/한국의약품수출입협회로고.jpg"/>
                    </figure>
                    <p>
                    {t("한국의약품수출입협회")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/한국지역정보개발원로고.jpg"/>
                    </figure>
                    <p>
                    {t("한국지역정보개발원")}
                    </p>
                </span> 
                <span className="items">
                    <figure>
                        <img src="/assets/한국전자통신연구원로고.png"/>
                    </figure>
                    <p>
                    {t("한국전자통신연구원")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/한진정보통신로고.png"/>
                    </figure>
                    <p>
                    {t("한진정보통신")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/대전과학산업진흥원로고.jpg"/>
                    </figure>
                    <p>
                    {t("대전과학산업진흥원")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/우송대학교로고.png"/>
                    </figure>
                    <p>
                    {t("우송대학교")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/한미사이언스로고.jpg"/>
                    </figure>
                    <p>
                    {t("한미사이언스")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/아이티존로고.png"/>
                    </figure>
                    <p>
                    {t("아이티존")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/영신디엔씨로고.jpg"/>
                    </figure>
                    <p>
                    {t("영신디엔씨")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/지니언스로고.png"/>
                    </figure>
                    <p>
                    {t("지니언스")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/투케이엠로고.png"/>
                    </figure>
                    <p>
                    {t("투케이엠")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/경우시스테크로고.png"/>
                    </figure>
                    <p>
                    {t("경우시스테크")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/We-Bridge로고.png"/>
                    </figure>
                    <p>
                    {t("We-Bridge Worlds")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/EUROSTAR로고.png"/>
                    </figure>
                    <p>
                    {t("EUROSTAR Group")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/qnp로고.png"/>
                    </figure>
                    <p>
                    {t("Quorum Nusa Prestasi(QNP)")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/TechnoPro로고.png"/>
                    </figure>
                    <p>
                    {t("TechnoPro Africa")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/elix로고.png"/>
                    </figure>
                    <p>
                    {t("ELIX")}
                    </p>
                </span>
                <span className="items">
                    <figure>
                        <img src="/assets/sarafin로고.png"/>
                    </figure>
                    <p>
                    {t("SARAFIN AI")}
                    </p>
                </span>
            </div>
        </div>
    );
}

export default PartnerList;