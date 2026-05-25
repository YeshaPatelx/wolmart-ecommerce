import { PiTShirtLight } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { BsLaptop, BsPhone } from "react-icons/bs";
import { MdOutlineChair, MdOutlineWatch } from "react-icons/md";
import { HiOutlineGift } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiCookingPot } from "react-icons/gi";
import { TbDeviceCameraPhone } from "react-icons/tb";


// Banner images
import fashionBanner from "../assets/images/menu/fashion-banner.jpg";
import homeGardenBanner from "../assets/images/menu/home-garden-banner.jpg";
import electronicsBanner from "../assets/images/menu/electronics-banner.jpg";

// Furniture special banners
import furnitureBanner1 from "../assets/images/menu/furniture-banner-1.jpg";
import furnitureBanner2 from "../assets/images/menu/furniture-banner-2.jpg";


export const megaMenuData = [
  {
    title: "SHOP PAGES",
    links: [
      {
        name: "Banner With Sidebar",
      },

      {
        name: "Boxed Banner",
      },

      {
        name: "Full Width Banner",
      },

      {
        name: "Horizontal Filter",
        badge: "HOT",
      },

      {
        name: "Off Canvas Sidebar",
        badge: "NEW",
      },

      {
        name: "Infinite Ajax Scroll",
      },

      {
        name: "Right Sidebar",
      },

      {
        name: "Both Sidebar",
      },
    ],
  },

  {
    title: "SHOP LAYOUTS",
    links: [
      {
        name: "3 Columns Mode",
      },

      {
        name: "4 Columns Mode",
      },

      {
        name: "5 Columns Mode",
      },

      {
        name: "6 Columns Mode",
      },

      {
        name: "7 Columns Mode",
      },

      {
        name: "8 Columns Mode",
      },

      {
        name: "List Mode",
      },

      {
        name: "List Mode With Sidebar",
      },
    ],
  },

  {
    title: "PRODUCT PAGES",
    links: [
      {
        name: "Variable Product",
      },

      {
        name: "Featured & Sale",
      },

      {
        name: "Data In Accordion",
      },

      {
        name: "Data In Sections",
      },

      {
        name: "Image Swatch",
      },

      {
        name: "Extended Info",
      },

      {
        name: "Without Sidebar",
      },

      {
        name: "360° & Video",
        badge: "NEW",
      },
    ],
  },

  {
    title: "PRODUCT LAYOUTS",
    links: [
      {
        name: "Default",
        badge: "HOT",
      },

      {
        name: "Vertical Thumbs",
      },

      {
        name: "Grid Images",
      },

      {
        name: "Masonry",
      },

      {
        name: "Gallery",
      },

      {
        name: "Sticky Info",
      },

      {
        name: "Sticky Thumbs",
      },

      {
        name: "Sticky Both",
      },
    ],
  },
];

// vendor

export const vendorMenu = [
  {
    title: "Store Listing",
    submenu: [
      "Store listing 1",
      "Store listing 2",
      "Store listing 3",
      "Store listing 4",
    ],
  },

  {
    title: "Vendor Store",
    submenu: [
      "Vendor Store 1",
      "Vendor Store 2",
      "Vendor Store 3",
    ],
  },
];

// blogMenuData.js

export const blogMenu = [
  {
    title: "Classic",
  },

  {
    title: "Listing",
  },

  {
    title: "Grid",
    submenu: [
      "Grid 2 columns",
      "Grid 3 columns",
      "Grid 4 columns",
      "Grid sidebar",
    ],
  },

  {
    title: "Masonry",
    submenu: [
      "Masonry 2 columns",
      "Masonry 3 columns",
      "Masonry 4 columns",
      "Masonry sidebar",
    ],
  },

  {
    title: "Mask",
    submenu: [
      "Blog mask grid",
      "Blog mask masonry",
    ],
  },

  {
    title: "Single Post",
  },
];


// pagesMenuData.js

export const pagesMenu = [
  {
    title: "About Us",
  },

  {
    title: "Become A Vendor",
  },

  {
    title: "Contact Us",
  },

  {
    title: "FAQs",
  },

  {
    title: "Error 404",
  },

  {
    title: "Coming Soon",
  },

  {
    title: "Wishlist",
  },

  {
    title: "Cart",
  },

  {
    title: "Checkout",
  },

  {
    title: "My Account",
  },

  {
    title: "Compare",
  },
];

// Elements.js

export const elementsMenu = [
  {
    title: "Accordions",
  },
  {
    title: "Alert & Notification",
  },
  {
  title: "Blog Posts",
},

{
  title: "Buttons",
},

{
  title: "Call to Action",
},

{
  title: "Icons",
},

{
  title: "Icon Boxes",
},

{
  title: "Instagrams",
},

{
  title: "Product Category",
},

{
  title: "Products",
},

{
  title: "Tabs",
},

{
  title: "Testimonials",
},

{
  title: "Titles",
},

{
  title: "Typography",
},

{
  title: "Vendors",
},
  
]


// Replace your existing browsecategoryMenu in src/data/menuData.js

export const browsecategoryMenu = [
  {
    title: "Fashion",
    icon: PiTShirtLight,
    banner: fashionBanner,
    submenu: {
      women: [
        "New Arrivals",
        "Best Sellers",
        "Trending",
        "Clothing",
        "Shoes",
        "Bags",
      ],
      men: [
        "New Arrivals",
        "Best Sellers",
        "Trending",
        "Clothing",
        "Shoes",
        "Accessories",
      ],
    },
  },

  {
    title: "Home & Garden",
    icon: FiHome,
    banner: homeGardenBanner,
    submenu: {
      bedroom: [
        "Beds, Frames & Bases",
        "Dressers",
        "Nightstands",
        "Kid's Beds & Headboards",
        "Armoires",
      ],
      office: [
        "Office Chairs",
        "Desks",
        "Bookcases",
        "File Cabinets",
        "Breakroom Tables",
      ],
      "living room": [
        "Coffee Tables",
        "Chairs",
        "Tables",
        "Futons & Sofa Beds",
        "Cabinets & Chests",
      ],
      "kitchen & dining": [
        "Dining Sets",
        "Kitchen Storage Cabinets",
        "Bakers Racks",
        "Dining Chairs",
        "Bar Stools",
      ],
    },
  },

  {
    title: "Electronics",
    icon: BsLaptop,
    banner: electronicsBanner,
    submenu: {
      computers: [
        "Laptops",
        "Desktops",
        "Monitors",
        "Printers",
        "Accessories",
      ],
      audio: [
        "Headphones",
        "Speakers",
        "Microphones",
        "Sound Bars",
      ],
    },
  },

  {
    title: "Furniture",
    icon: MdOutlineChair,

    // Special layout uses two bottom banners
    bottomBanners: [furnitureBanner1, furnitureBanner2],

    submenu: {
      furniture: [
        "Sofas & Couches",
        "Armchairs",
        "Bed Frames",
        "Beside Tables",
        "Dressing Tables",
      ],

      lighting: [
        "Light Bulbs",
        "Lamps",
        "Ceiling Lights",
        "Wall Lights",
        "Bathroom Lighting",
      ],

      "home accessories": [
        "Decorative Accessories",
        "Candles & Holders",
        "Home Fragrance",
        "Mirrors",
        "Clocks",
      ],

      "garden & outdoors": [
        "Garden Furniture",
        "Lawn Mowers",
        "Pressure Washers",
        "All Garden Tools",
        "Outdoor Dining",
      ],
    },
  },

  {
  title: "Healthy & Beauty",
  icon: MdOutlineWatch,
},

{
  title: "Gift Ideas",
  icon: HiOutlineGift,
},

{
  title: "Toy & Games",
  icon: IoGameControllerOutline,
},

{
  title: "Cooking",
  icon: GiCookingPot,
},

{
  title: "Smart Phones",
  icon: BsPhone,
},

{
  title: "Cameras & Photo",
  icon: TbDeviceCameraPhone,
},

{
  title: "Accessories",
  icon: PiTShirtLight,
},

];