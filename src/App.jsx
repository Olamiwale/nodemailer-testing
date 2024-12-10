import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import CheckoutPage from './components/CheckoutPage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
    </Router>
);

export default App;
