import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { CompanyItems } from "./CompanyItems";
import Link from "next/link";

export const getStaticProps = async ({ locale }) => ({
  // console.log("locale : ", locale);

  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function CompanyButton({ cname, select }) {
  const { t } = useTranslation("common");
  const [compItem, setCompItem] = useState({});

  useEffect(() => {
    let temp = {};

    CompanyItems.map((item) => {
      Object.assign(temp, item);
    });
    setCompItem(temp);
  }, []);

  return (
    <li>
      <Link href={cname}>
        <button className={"Button " + (select ? "select" : null)}>
          <p className="selectP" style={{ textTransform: "capitalize " }}>
            {t(compItem[cname])}
          </p>
        </button>
      </Link>
    </li>
  );
}

export default CompanyButton;
