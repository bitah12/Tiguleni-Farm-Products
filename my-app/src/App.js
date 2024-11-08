// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductSearch from './components/ProductSearch';
import Footer from './components/Footer';

// Placeholder components for other pages
const Home = () => <div>Home Page</div>;
const Contact = () => <div>Contact Page</div>;
const About = () => <div>About Page</div>;
const Services = () => <div>Services Page</div>;
const Login = () => <div>Login Page</div>;

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<ProductSearch />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
