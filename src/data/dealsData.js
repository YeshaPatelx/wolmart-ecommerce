// src/data/dealsData.js

// ================= JACKET IMAGES =================
import jacketImage1 from "../assets/images/deals/jacket/jacket-image-1.jpg";
import jacketImage2 from "../assets/images/deals/jacket/jacket-image-2.jpg";
import jacketImage3 from "../assets/images/deals/jacket/jacket-image-3.jpg";
import jacketImage4 from "../assets/images/deals/jacket/jacket-image-4.jpg";

// ================= HANDBAG IMAGES =================
import handbagImage1 from "../assets/images/deals/handbag/handbag-image-1.jpg";
import handbagImage2 from "../assets/images/deals/handbag/handbag-image-2.jpg";
import handbagImage3 from "../assets/images/deals/handbag/handbag-image-3.jpg";
import handbagImage4 from "../assets/images/deals/handbag/handbag-image-4.jpg";

export const dealProducts = [
  {
    id: 1,

    title: "Coat Pool Comfort Jacket",

    price: "$150.00 – $180.00",

    offer: "0 days, 00 : 00 : 00",

    discount: "25% OFF",

    reviews: "(3 Reviews)",

    images: [
      jacketImage1,
      jacketImage2,
      jacketImage3,
      jacketImage4,
    ],
  },

  {
    id: 2,

    title: "Women Fashion Bag",

    price: "$120.00 – $160.00",

    offer: "1 days, 05 : 10 : 20",

    discount: "30% OFF",

    reviews: "(5 Reviews)",

    images: [
      handbagImage1,
      handbagImage2,
      handbagImage3,
      handbagImage4,
    ],
  },
];

export const sizesData = [
  {
    size: "Extra Large",
    price: "$234.00",
  },

  {
    size: "Large",
    price: "$210.00",
  },

  {
    size: "Medium",
    price: "$180.00",
  },

  {
    size: "Small",
    price: "$150.00",
  },
];