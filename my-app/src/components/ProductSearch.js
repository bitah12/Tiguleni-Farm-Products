// src/ProductSearch.js

import { FiHeart, FiShoppingCart, FiSearch } from 'react-icons/fi';

const products = [
    {
        name: "Mbabatetsi",
        price: "MWK6000/3kg",
        img: "https://via.placeholder.com/150", // Replace with actual image URL
        rating: 5,
    },
    {
        name: "Rice Kilombelo",
        price: "MWK4000/kg",
        img: "https://via.placeholder.com/150", // Replace with actual image URL
        rating: 5,
    },
    {
        name: "Goat",
        price: "MWK12000/each",
        img: "https://via.placeholder.com/150", // Replace with actual image URL
        rating: 5,
    },
    {
        name: "Mbabatetsi",
        price: "MWK6000/3kg",
        img: "https://via.placeholder.com/150", // Replace with actual image URL
        rating: 5,
    },
    {
        name: "Rice Kilombelo",
        price: "MWK4000/kg",
        img: "https://via.placeholder.com/150", // Replace with actual image URL
        rating: 5,
    },
    {
        name: "Goat",
        price: "MWK12000/each",
        img: "https://via.placeholder.com/150", // Replace with actual image URL
        rating: 5,
    },
];

const ProductSearch = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-1/4 bg-white p-6 shadow-md">
                <h2 className="text-xl font-bold mb-6">Filter By</h2>
                <div className="mb-6">
                    <h3 className="font-semibold text-lg">Categories</h3>
                    <div className="flex items-center my-2">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <label>Crops</label>
                    </div>
                    <div className="flex items-center my-2">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <label>Machinery</label>
                    </div>
                    <div className="flex items-center my-2">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <label>Livestock</label>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold text-lg">Price</h3>
                    <input type="range" min="0" max="10000" className="w-full mt-2" />
                    <div className="flex justify-between text-sm">
                        <span>MWK0</span>
                        <span>MWK10000</span>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold text-lg">Tags</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {['Vegetables', 'Agrochemicals', 'Animal Feed', 'New', 'Trending', 'Label'].map((tag, index) => (
                            <button key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-6">
                {/* Search Bar */}
                <div className="flex items-center bg-white p-4 rounded shadow mb-6">
                    <input
                        type="text"
                        placeholder="Looking for what?"
                        className="flex-grow p-2 outline-none"
                    />
                    <FiSearch className="text-gray-500 text-lg ml-4" />
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white p-4 shadow rounded-lg relative">
                            <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                            <button className="absolute top-2 right-2 text-gray-500">
                                <FiHeart className="text-lg" />
                            </button>
                            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                            <p className="text-gray-700">{product.price}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 mr-2">{'★'.repeat(product.rating)}</span>
                                <span className="text-gray-500">({product.rating * 15})</span>
                            </div>
                            <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded flex items-center justify-center gap-2">
                                <FiShoppingCart /> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                    <button className="px-4 py-2 bg-gray-200 rounded-l text-gray-600">Previous</button>
                    <button className="px-4 py-2 bg-blue-500 text-white">1</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-600">2</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-600">3</button>
                    <span className="px-4 py-2">...</span>
                    <button className="px-4 py-2 bg-gray-200 text-gray-600">67</button>
                    <button className="px-4 py-2 bg-gray-200 rounded-r text-gray-600">Next</button>
                </div>
            </main>
        </div>
    );
};

export default ProductSearch;
