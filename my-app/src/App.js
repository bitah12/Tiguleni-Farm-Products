// src/App.js

import ProductSearch from './components/ProductSearch'; // Update this path
import './index.css';

function App() {
    return (
        <div className="App bg-gray-50 min-h-screen">
            <header className="bg-gray-800 text-white p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">TiGuLeNi</h1>
                    <nav className="space-x-4">
                        <a href="/" className="text-white">Home</a>
                        <a href="/contact" className="text-white">Contact</a>
                        <a href="/about" className="text-white">About</a>
                        <a href="/products" className="text-white">Products</a>
                        <a href="/services" className="text-white">Services</a>
                        <a href="/login" className="text-white">Login</a>
                    </nav>
                </div>
            </header>
            <ProductSearch />
        </div>
    );
}

export default App;
