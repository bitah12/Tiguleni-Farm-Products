import React, { useState } from 'react';
import { FiHeart, FiShoppingCart, FiSearch } from 'react-icons/fi';
import KilomberoImage from '../pictures/kilombero.jpg';
import irishImage from '../pictures/irish.jpeg';
import goatImage from  '../pictures/goat.jpeg';
import tractorImage from  '../pictures/tractor.jpeg';
import bananaImage from  '../pictures/banana.jpeg';
import chickenImage from  '../pictures/chicken.jpeg';
import groundnutImage from  '../pictures/groundnut seed.jpeg';
import growerImage from  '../pictures/grower.jpeg';
import milkImage from  '../pictures/milk.jpeg';
import pesticidesImage from  '../pictures/pestcides.jpeg';
import ureaImage from  '../pictures/urea.jpeg';
import shovelImage from  '../pictures/shovel.jpeg';



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
        'Crops', 'Machinery', 'Agrochemicals', 'Fertilizers', 'Seeds', 'Dairy', 'Poultry', 'Fruits', 'Animal Feed', 'Farm Tools','LiveStock'
    ]);
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);

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

    return (
        <div className="flex p-8">
            {/* Sidebar Filters */}
            <div className="w-1/4 p-4 bg-gray-100 rounded-lg">
                <h2 className="font-bold mb-4">Filter By</h2>

                {/* Category Filter */}
                <div className="mb-4">
                    <h3 className="font-semibold">Categories</h3>
                    {[
                        'Crops', 'Machinery', 'Agrochemicals', 'Fertilizers', 'Seeds',
                        'Dairy', 'Poultry', 'Fruits', 'Animal Feed', 'Farm Tools','LiveStock'
                    ].map((category) => (
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

                {/* Price Filter */}
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

                {/* Tags Filter */}
                <div>
                    <h3 className="font-semibold">Tags</h3>
                    <label className="block">
                        <input
                            type="checkbox"
                            onChange={() => handleTagChange('New')}
                            checked={selectedTags.includes('New')}
                        />{' '}
                        New
                    </label>
                    <label className="block">
                        <input
                            type="checkbox"
                            onChange={() => handleTagChange('Trending')}
                            checked={selectedTags.includes('Trending')}
                        />{' '}
                        Trending
                    </label>
                    <label className="block">
                        <input
                            type="checkbox"
                            onChange={() => handleTagChange('Label')}
                            checked={selectedTags.includes('Label')}
                        />{' '}
                        Label
                    </label>
                </div>
            </div>

            {/* Product List */}
            <div className="w-3/4 ml-8">
                {/* Search Bar */}
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

                {/* Product Grid */}
                <div className="grid grid-cols-3 gap-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div
                                key={product.name}
                                className="border rounded-lg p-4 shadow-sm bg-white flex flex-col items-center"
                                style={{width: '250px', height: '350px'}}
                            >
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="object-cover w-full h-40 rounded-t-lg"
                                    style={{objectFit: 'cover'}}
                                />
                                <div className="mt-2"> {/* Removed text-center for left alignment */}
                                    <h4 className="font-semibold text-lg text-left">{product.name}</h4> {/* Added text-left for left alignment */}
                                    <p className="text-red-500 font-bold text-left">MWK{product.price}/{product.unit}</p> {/* Added text-left */}
                                    <p className="text-yellow-500 text-left">{'⭐'.repeat(product.rating)}</p> {/* Added text-left */}
                                    <div className="flex mt-2 space-x-2"> {/* Removed justify-center */}
                                        <button onClick={() => toggleLike(product.name)} className="text-red-500">
                                            <FiHeart
                                                className={likedProducts.includes(product.name) ? 'fill-current' : ''}/>
                                        </button>
                                        <button className="text-gray-700">
                                            <FiShoppingCart/>
                                        </button>
                                    </div>
                                </div>


                            </div>
                        ))
                    ) : (
                        <p>No products found matching your criteria.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ProductSearch;
