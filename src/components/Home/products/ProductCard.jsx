import React, { useState, useEffect } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = ({ product, toggleLike, isLiked }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);


  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find(
      (item) => item.productId === product.productId
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.products_name} has been added to your cart.`);
  };

  return (
    <div className="border h-full w-full rounded-lg p-4 shadow-sm bg-white flex flex-col">
      <Link to={`/productDetails/:${product.productId}`}>
        <img
          src={product.imageUrl}
          alt={product.products_name}
          className="w-full h-48 mb-4 rounded-md object-cover"
        />
        <h3 className="text-lg font-semibold">{product.products_name}</h3>
        <p className="text-gray-800 mb-2">
          MWK{product.price} / {product.quantity_metric}
        </p>
        <p className="text-gray-600">{product.category}</p>
      </Link>
      <div className="flex items-center mb-2">
        {Array.from({ length: product.rating }, (_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        <button
          onClick={() => toggleLike(product.products_name)}
          className="relative transition-transform duration-200 hover:scale-110"
        >
          <FiHeart
            className={`transition-colors duration-200`}
            style={{
              color: isLiked ? "red" : "gray",
              fontSize: "24px",
            }}
          />
          {isLiked && (
            <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></span>
          )}
        </button>
        <button
          onClick={() => addToCart(product)}
          className="relative transition-transform duration-200 hover:scale-110"
        >
          <FiShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
