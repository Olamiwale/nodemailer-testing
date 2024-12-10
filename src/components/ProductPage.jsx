import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    const products = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 200 },
    ];
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <Link to="/checkout" state={{ cart }}>Go to Checkout</Link>
        </div>
    );
};

export default ProductPage;
