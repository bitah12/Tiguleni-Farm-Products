import React from 'react'
import LandingBanner from './banners/LandingBanner'
import NewProducts from './products/NewProducts'
import SecondBanner from './banners/SecondBanner'
import ThirdBanner from './banners/ThirdBanner'
import TrendingProducts from './products/TrendingProducts'
import ProductCategories from './products/ProductCategories'
import CustomerService from './banners/CustomerService'

function Home() {
  return (
    <div>
        <LandingBanner/>
        <NewProducts/>
        <ProductCategories/>
        <SecondBanner/>
        <TrendingProducts/>
        <ThirdBanner/>
        <CustomerService/>
    </div>
  )
}

export default Home