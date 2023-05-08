import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission is to provide collectors and investors with the finest selection of rare and valuable coins, backed by exceptional customer service and a commitment to authenticity.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to be the premier destination for rare coin collectors and investors, recognized for our quality, expertise, and dedication to the hobby.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Founded by a group of passionate collectors, Arthas Gold Coins has been sourcing and selling rare coins since 2005. Our expertise and love for the hobby have helped us build a reputation as a trusted and reliable source for quality coins.",
  },
];

// export const products_url = "https://course-api.com/react-store-products";
export const products_url = "/.netlify/functions/products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const single_product_url = `/.netlify/functions/single-product?id=`;
