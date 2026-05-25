import React from 'react'
import HeroBanner from "../components/home/HeroBanner/HeroBanner";
import Features from '../components/home/Features/FeaturesSection';
import Categories from "../components/home/Categories/Categories";
import DealsSection from '../components/home/Deals Section/DealsSection';
import TopCategories from '../components/home/TopCategories/TopCategories';
import PopularProducts from '../components/home/PopularDepartments/PopularProducts';
import OfferBanner from '../components/home/OfferBanner/OfferBanner';
import ProductShowcase from '../components/home/ProductShowcase/ProductShowcase';
import PromoBanner from '../components/home/PromoBanner/PromoBanner';
import Clients from '../components/home/Clients/Clients';
import Blog from '../components/home/Blog/Blog';
import RecentViews from '../components/home/RecentViews/RecentViews';


const Home = () => {
  return (
    <>
      <HeroBanner/>
      <Features/>
      <Categories />
      <DealsSection/>
      <TopCategories/>
      <PopularProducts/>
      <OfferBanner/>
      <ProductShowcase/>
      <PromoBanner/>
      <Clients/>
      <Blog/>
      <RecentViews/>
    </>
  )
}

export default Home