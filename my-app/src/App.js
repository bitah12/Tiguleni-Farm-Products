// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import ProductSearch from './components/ProductSearch';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <ProductSearch />
            <Footer /> {/* Add Footer component here */}
        </div>
    );
}

export default App;
