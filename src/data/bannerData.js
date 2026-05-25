// data/bannerData.js

import bgslide1 from "../../src/assets/images/banners/slide-1.jpg";
import bgslide2 from "../../src/assets/images/banners/slide-2.jpg";
import bgslide3 from "../../src/assets/images/banners/slide-3.jpg";

import skateImg from "../../src/assets/images/banners/sket.png";
import shoeImg from "../../src/assets/images/banners/shoes.png";
import bagImg from "../../src/assets/images/banners/men.png";

const commonButtonText = "SHOP NOW";

export const bannerData = [
  
  {
    id: 1,
    bgImage: bgslide1,
    productImage: skateImg,
    subtitle: "TOP WEEKLY SELLER",
    title: "Trending Collection",
    highlight: "Roller-skate",
    className: "roller-banner",
    buttonText: commonButtonText,
  },

  {
    id: 2,
    bgImage: bgslide2,
    productImage: shoeImg,
    subtitle: "Custom Men’s",
    title: "RUNNING SHOES",
    highlight: "Sale up to 30% OFF",
    className: "shoes-banner",
    buttonText: commonButtonText,
  },

  {
    id: 3,
    bgImage: bgslide3,
    productImage: bagImg,
    subtitle: "Mountain-Climbing",
    title: "Hot & Packback",
    highlight: "Only until the end of this week.",
    className: "bag-banner",
    buttonText: commonButtonText,
  },
];