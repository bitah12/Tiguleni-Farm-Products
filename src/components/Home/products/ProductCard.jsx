import React, { useState } from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product, toggleLike, isLiked }) => {
    return (
        <div className="border h-full w-full rounded-lg p-4 shadow-sm bg-white flex flex-col">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 mb-4 rounded-md object-cover"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-800 mb-2">MWK{product.price} / {product.unit}</p>
            <p className="text-gray-600">{product.category}</p>
            <div className="flex items-center mb-2">
                {Array.from({ length: product.rating }, (_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                ))}
            </div>
            <div className="flex gap-4 mt-auto">
                <button
                    onClick={() => toggleLike(product.name)}
                    className="relative transition-transform duration-200 hover:scale-110"
                >
                    <FiHeart
                        className={`transition-colors duration-200`}
                        style={{
                            color: isLiked ? 'red' : 'gray',
                            fontSize: '24px',
                        }}
                    />
                    {isLiked && (
                        <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></span>
                    )}
                </button>
                <button>
                    <FiShoppingCart />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
