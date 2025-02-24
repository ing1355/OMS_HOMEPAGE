import withHead from "../components/withHead";

import Main_Title from "../components/Main/Main_Title";
import Main_Brochure from "../components/Main/Main_Brochure";
import Main_Certificate from "../components/Main/Main_Certificate";
import Main_Products from "../components/Main/Main_Products";
import Main_Company from "../components/Main/Main_Company";

import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import "swiper/swiper.min.css";

dynamic(() => import("swiper/components/pagination/pagination.min.css"), {
  ssr: false,
});
dynamic(() => import("swiper/components/navigation/navigation.min.css"), {
  ssr: false,
});
import "../css/Main.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Index = (props) => {
  return (
    <>
      <Main_Title />
      <Main_Company />
      <Main_Products />
      <Main_Brochure />
      <Main_Certificate />
    </>
  );
};

export default withHead(
  Index,
  "(주)원모어시큐리티",
  "세계 최고의 보안기술을 제공하는 “글로벌 보안 유니콘기업”을 목표로 달려가겠습니다."
);
