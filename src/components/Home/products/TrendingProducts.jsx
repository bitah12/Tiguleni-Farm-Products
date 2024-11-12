import React from 'react';
import ProductCard from './ProductCard';
import products from "./Products";
import { Link } from 'react-router-dom';

function TrendingProducts() {
  return (
    <div className=" justify-center mt-[100px]">
      <div className=" ml-[75px]"><div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <div className="bg-red-500  rounded-md h-[50px] w-[27px]"></div>
          <h2 className="mt-3 text-xl font-bold text-red-500">New Products</h2>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-6">Recently Added</h3></div>
     <Link to='/productDetails:productId'> <div className=' ml-[15px]  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 md:gap-x-8'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div></Link>
    </div>
  );
}

export default TrendingProducts;