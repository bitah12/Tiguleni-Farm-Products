import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";



export default function AboutUs() {
  return (<div>
    <Navbar/>
    <div className="flex flex-col md:flex-row items-center justify-between  py-20 ">
      <div className="md:w-1/2 mb-8 md:mb-0 ml-[180px] m-0">
        <h2 className="text-5xl font-bold text-black  mb-11">Our Story</h2>
        <p className="text-black leading-relaxed mb-4">
          Welcome to Tiguleni Farmers Marketplace, the fresh, new platform
          <br/>
          where local farmers and quality produce meet! Founded in 2024,
          <br/> our mission is to empower Malawi's farmers by connecting
          them <br/>directly with buyers, providing a seamless way to sell
          their <br/>products while offering customers the freshest
          farm-to-table<br/>goods.
        </p>
        <p className="text-black text-[15px] leading-relaxed mb-4">
          Our platform makes it easy for buyers to explore, order, and
          <br/>enjoy farm-fresh produce while supporting local farmers.{" "}
          <br/>
          Whether you're looking for top-quality products or a farmer<br/>{" "}
          looking to expand your reach, Tiguleni is where farming meets
          <br/>opportunity.
        </p>
      </div>

      <div className="flex justify-end">
        <img
          src="/src/assets/Abouts.png"
          alt="CustomerInsight"
          className="w-[650px] h-[500px] object-cover"
        />
      </div>
      
    </div>
    <Footer/>
  </div>
    
  
  )
}



