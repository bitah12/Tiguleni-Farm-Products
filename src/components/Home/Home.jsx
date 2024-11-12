import React from 'react'
import LandingBanner from './banners/LandingBanner'
import NewProducts from './products/NewProducts'
import SecondBanner from './banners/SecondBanner'
import ThirdBanner from './banners/ThirdBanner'
import TrendingProducts from './products/TrendingProducts'
import ProductCategories from './products/ProductCategories'
import CustomerService from './banners/CustomerService'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Home() {
  return (
    <div><Navbar/>
        <LandingBanner/>
        <NewProducts/>
        <ProductCategories/>
        <SecondBanner/>
        <TrendingProducts/>
        <ThirdBanner/>
        <CustomerService/>
        <p className='text-9xl opacity-0'>hello</p>
        <Footer/>
    </div>
  )
}

export default Home