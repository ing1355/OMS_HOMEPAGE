import Head from "next/head";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const withHead = (Component, title, description, keywords) => {
  // console.log(keywords);
  // console.log(title);
  // console.log(description);

  const C = (props) => {
    const { t } = useTranslation("common");
    return (
      <>
        <Head>
          {/* <meta charset="euc-kr" /> */}
          <title>{t("원모어시큐리티")}</title>
          <link href="https://omsecurity.kr/" rel="canonical" />
          <meta
            name="naver-site-verification"
            content="683eeab11cc2c9065e7b1ac7f3ee20ccff632225"
          />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={description} />
          <meta name="robots" content="index,follow" />
          <meta name="robots" content="all" />
          <meta name="NaverBot" content="all" />
          <meta name="NaverBot" content="index,follow" />
          <meta name="Yeti" content="all" />
          <meta name="Yeti" content="index,follow" />
          <meta name="keywords" content={keywords} />
          <meta name="Subject" content={title} />
          <meta name="writer" content="OneMoreSecurity" />
          <meta name="copyright" content="Copyright © OneMoreSecurity Inc." />
          <meta httpEquiv="Cache-Control" content="No-Cache" />
          <meta httpEquiv="Pragma" content="No-Cache" />

          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:image" content={description} />
          <meta
            name="og:url"
            rel="canonical"
            content={"https://omsecurity.kr/"}
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} key="title" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={description} />
          <meta
            property="og:url"
            rel="canonical"
            content="https://omsecurity.kr/"
          />

          {keywords && (
            <meta
              name="keyword"
              content={keywords.toString().replace(/,/gi, ", ")}
            />
          )}
        </Head>

        <Component {...props} />
      </>
    );
  };

  return C;
};

export default withHead;
