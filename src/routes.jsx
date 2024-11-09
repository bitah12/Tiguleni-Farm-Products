// src/routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductSearch from './components/ProductSearch';


const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/products" element={<ProductSearch />} />

        </Routes>
    );
};

export default AppRoutes;
