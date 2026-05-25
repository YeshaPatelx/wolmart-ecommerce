// productShowcaseData.js

import product1 from "../assets/images/showcase/product1.jpg";
import product2 from "../assets/images/showcase/product2.jpg";
import product3 from "../assets/images/showcase/product3.jpg";
import product4 from "../assets/images/showcase/product1.jpg";
import product5 from "../assets/images/showcase/product2.jpg";
import product6 from "../assets/images/showcase/product3.jpg";
import product7 from "../assets/images/showcase/product1.jpg";
import product8 from "../assets/images/showcase/product2.jpg";

import bannerImg from "../assets/images/showcase/banner1.jpg";

/* BANNER */
// productShowcaseData.js

export const showcaseBanner = {
  subtitle: "New Collection",
  title: "Top Camera",
  highlight: "Mirrorless",
  buttonText: "SHOP NOW",
  image: bannerImg,

  textColor: "white", // white or black
};

/* PRODUCTS */
export const clothingProducts = [
  {
    id: 1,
    image: product1,
    title: "Men’s Clothing",
    reviews: 3,
    price: "$23.99",
    oldPrice: "$25.68",
   
  },

  {
    id: 2,
    image: product2,
    title: "Best Travel Bag",
    reviews: 5,
    price: "$35.99",
    oldPrice: "$45.68",
    discount: "20% OFF",
  },

  {
    id: 3,
    image: product3,
    title: "Women Fashion Handbag",
    reviews: 4,
    price: "$55.99",
    oldPrice: "$65.68",
    discount: "15% OFF",
  },

  {
    id: 4,
    image: product4,
    title: "Gray Leather Shoes",
    reviews: 6,
    price: "$85.99",
    oldPrice: "$95.68",
    discount: "12% OFF",
  },

  {
    id: 5,
    image: product5,
    title: "Wireless Headphone",
    reviews: 8,
    price: "$65.99",
    oldPrice: "$80.68",
    discount: "18% OFF",
  },

  {
    id: 6,
    image: product6,
    title: "Modern Smart Watch",
    reviews: 7,
    price: "$120.99",
    oldPrice: "$150.68",
    discount: "25% OFF",
  },

  {
    id: 7,
    image: product7,
    title: "Sports Running Shoes",
    reviews: 9,
    price: "$95.99",
    oldPrice: "$115.68",
    discount: "14% OFF",
  },

  {
    id: 8,
    image: product8,
    title: "Gaming Backpack",
    reviews: 4,
    price: "$49.99",
    oldPrice: "$65.68",
    discount: "22% OFF",
  },
];