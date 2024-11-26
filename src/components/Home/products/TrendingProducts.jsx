import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";  // Make sure ProductCard is imported
import { Link } from "react-router-dom";

function TrendingProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/products");  // Adjust URL as needed
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="justify-center mt-[100px]">
      <div className="ml-[75px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div className="bg-red-500 rounded-md h-[50px] w-[27px]"></div>
            <h2 className="mt-3 text-xl font-bold text-red-500">Trending Products</h2>
          </div>
        </div>
        <h3 className="text-2xl relative -left-[510px] font-bold mb-6">Trending This Month</h3>
      </div>
      <div className="ml-[15px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 md:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default TrendingProducts;
