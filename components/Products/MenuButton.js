import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function MenuButton({ name, select }) {
  const { t } = useTranslation("common");
  const [menuItems, setMenuItems] = useState({});
  useEffect(() => {
    let temp = {};
    MenuItems.map((item) => {
      Object.assign(temp, item);
    });
    setMenuItems(temp);
  }, []);

  return (
    <li>
      <Link href={name}>
        <button className={name + " Button " + (select ? "select" : null)}>
          <p style={{ textTransform: "capitalize " }}>{t(menuItems[name])}</p>
        </button>
      </Link>
    </li>
  );
}

export default MenuButton;
