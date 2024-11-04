import React, { useState } from 'react';
import { FiHeart, FiShoppingCart, FiSearch } from 'react-icons/fi';
import KilomberoImage from '../pictures/kilombero.jpg';
import irishImage from '../pictures/irish.jpeg';
import goatImage from '../pictures/goat.jpeg';
import tractorImage from '../pictures/tractor.jpeg';
import bananaImage from '../pictures/banana.jpeg';
import chickenImage from '../pictures/chicken.jpeg';
import groundnutImage from '../pictures/groundnut seed.jpeg';
import growerImage from '../pictures/grower.jpeg';
import milkImage from '../pictures/milk.jpeg';
import pesticidesImage from '../pictures/pestcides.jpeg';
import ureaImage from '../pictures/urea.jpeg';
import shovelImage from '../pictures/shovel.jpeg';

// Sample product data
const products = [
    {
        name: "Mbatatesi",
        category: "Crops",
        price: 6000,
        unit: "3kg",
        img: irishImage,
        rating: 5,
        tags: ["New"],
    },
    {
        name: "Rice Kilombelo",
        category: "Crops",
        price: 4000,
        unit: "1kg",
        img: KilomberoImage,
        rating: 5,
        tags: ["Trending"],
    },
    {
        name: "Goat",
        category: "LiveStock",
        price: 10000,
        unit: "each",
        img: goatImage,
        rating: 5,
        tags: ["Label"],
    },
    {
        name: "Tractor",
        category: "Machinery",
        price: 120000,
        unit: "each",
        img: tractorImage,
        rating: 5,
        tags: ["new"],
    },
    {
        name: "Pesticides",
        category: "Agrochemicals",
        price: 5000,
        unit: "each",
        img:pesticidesImage,
        rating: 5,
        tags:["Trending"]
    },
    {
        name: "Urea",
        category: "Fertilizers",
        price: 60000,
        unit: "50kg",
        img: ureaImage,
        rating: 5,
        tags: ["Label"]
    },
    {
        name: "Groundnut Seed",
        category: "Seeds",
        price: 1000,
        unit: "each",
        img: groundnutImage,
        rating: 5,
        tags: ["Trending"]
    },
    {
        name: "Milk",
        category: "Daily",
        price: 600,
        unit: "each",
        img: milkImage,
        rating: 5,
        tags: ["New"]
    },
    {
        name: "Chicken Meat",
        category: "Poultry",
        price: 10000,
        unit: "each",
        img: chickenImage,
        rating: 5,
        tags: ["Trending"]
    },
    {
        name: "Banana",
        category: "Fruits",
        price: 3000,
        unit: "each",
        img: bananaImage,
        rating: 5,
        tags: ["Label"]
    },
    {
        name: "Grower Feed",
        category: "Animal Feed",
        price: 60000,
        unit: "50kg",
        img: growerImage,
        rating: 5,
        tags: ["Label"]
    },
    {
        name: "Shovel",
        category: "Farm Tools",
        price: 25000,
        unit: "each",
        img: shovelImage,
        rating: 5,
        tags: ["New"]
    },



    // Add more products for different categories as needed
];
const ProductSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([
        'Crops', 'Machinery', 'Agrochemicals', 'Fertilizers', 'Seeds',
        'Dairy', 'Poultry', 'Fruits', 'Animal Feed', 'Farm Tools', 'LiveStock'
    ]);
    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 6;

    const handleSearch = (e) => setSearchTerm(e.target.value);
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };
    const handlePriceChange = (e) => setPriceRange([0, parseInt(e.target.value)]);
    const handleTagChange = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const toggleLike = (productName) => {
        setLikedProducts((prev) =>
            prev.includes(productName)
                ? prev.filter((name) => name !== productName)
                : [...prev, productName]
        );
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => product.tags.includes(tag));

        return matchesSearch && matchesCategory && matchesPrice && matchesTags;
    });

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <div className="flex flex-col p-8">
            <div className="flex">
                <div className="w-1/4 p-4 bg-gray-100 rounded-lg">
                    <h2 className="font-bold mb-4">Filter By</h2>
                    <div className="mb-4">
                        <h3 className="font-semibold">Categories</h3>
                        {['Crops', 'Machinery', 'Agrochemicals', 'Fertilizers', 'Seeds',
                            'Dairy', 'Poultry', 'Fruits', 'Animal Feed', 'Farm Tools', 'LiveStock'].map((category) => (
                            <label className="block" key={category}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCategoryChange(category)}
                                    checked={selectedCategories.includes(category)}
                                />{' '}
                                {category}
                            </label>
                        ))}
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold">Price</h3>
                        <input
                            type="range"
                            min="0"
                            max="1000000"
                            value={priceRange[1]}
                            onChange={handlePriceChange}
                            className="w-full"
                        />
                        <p>MWK0 - MWK{priceRange[1]}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Tags</h3>
                        {['New', 'Trending', 'Label'].map((tag) => (
                            <label className="block" key={tag}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleTagChange(tag)}
                                    checked={selectedTags.includes(tag)}
                                />{' '}
                                {tag}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="w-3/4 ml-8">
                    <div className="flex items-center mb-4">
                        <FiSearch className="mr-2" />
                        <input
                            type="text"
                            placeholder="Looking for what?"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="border border-gray-300 rounded p-2 w-full"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {paginatedProducts.length > 0 ? (
                            paginatedProducts.map((product) => (
                                <div
                                    key={product.name}
                                    className="border rounded-lg p-4 shadow-sm bg-white flex flex-col"
                                >
                                    <img
                                        src={product.img}
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
                                    <div className="flex items-center space-x-4 mt-auto">
                                        <button
                                            onClick={() => toggleLike(product.name)}
                                            className="relative transition-transform duration-200 hover:scale-110"
                                        >
                                            <FiHeart
                                                className={`transition-colors duration-200`}
                                                style={{
                                                    color: likedProducts.includes(product.name) ? 'red' : 'gray',
                                                    fontSize: '24px',
                                                }}
                                            />
                                            {likedProducts.includes(product.name) && (
                                                <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></span>
                                            )}
                                        </button>
                                        <button>
                                            <FiShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No products found</p>
                        )}
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="bg-gray-300 p-2 rounded"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="bg-gray-300 p-2 rounded"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSearch;