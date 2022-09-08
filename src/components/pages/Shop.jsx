import React from "react";
import Banner from "./common/Banner";
import Shopsec1 from "./shop/shopsec1";
import Shopsec2 from "./shop/shopsec2";
import Aboutsec3 from "../pages/about/aboutsec3";
import { useTranslation } from "react-i18next";
const Shop = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner title={t("shop.0")} />
      <Shopsec1 />
      <Shopsec2 />
      <Aboutsec3 />
    </>
  );
};

export default Shop;
