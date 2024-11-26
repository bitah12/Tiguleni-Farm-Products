import React, { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NewProducts = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const carouselRef = useRef(null);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/products`); 
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="mt-[100px]">
      <div className="ml-[75px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div className="bg-red-500 rounded-md h-[50px] w-[27px]" />
            <h2 className="mt-3 text-xl font-bold text-red-500">New Products</h2>
          </div>
        </div>
        <h3 className="text-2xl relative -left-[540px] font-bold mb-6">Recently Added</h3>
      </div>
      <div className="p-8">
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full z-10"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div
            ref={carouselRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {loading ? (
              <div className="w-full text-center py-6">Loading...</div>
            ) : (
              products.length === 0 ? (
                <div className="w-full text-center py-6">No products available.</div>
              ) : (
                products.map((product) => (
                  <div className="flex-shrink-0 w-72" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))
              )
            )}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full z-10"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
