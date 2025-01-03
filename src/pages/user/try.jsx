import React, { useState, useEffect } from 'react';

function ProductList() {
    // Retrieve stored data from localStorage or default to empty array and 1
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const storedProductNumber = parseInt(localStorage.getItem('currentProductNumber')) || 1;

    const [products, setProducts] = useState(storedProducts);  // State to store the products
    const [currentProductNumber, setCurrentProductNumber] = useState(storedProductNumber);  // State to keep track of the product number

    // Function to format the product number with a prefix and leading zeros
    const formatProductNumber = (number) => {
        return `OD${String(number).padStart(4, '0')}`;
    };

    // Function to add a product with an incremented formatted number
    const addProduct = (productName) => {
        const formattedNumber = formatProductNumber(currentProductNumber);

        const newProduct = {
            name: productName,
            number: formattedNumber
        };

        const updatedProducts = [...products, newProduct];  // Add the new product to the list
        setProducts(updatedProducts);
        setCurrentProductNumber(currentProductNumber + 1);  // Increment the product number for the next product

        // Save the updated products list and current product number to localStorage
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        localStorage.setItem('currentProductNumber', currentProductNumber + 1);
    };

    return (
        <div>
            <h1>Product List</h1>
            <button onClick={() => addProduct('Product ' + currentProductNumber)}>
                Add Product
            </button>

            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - Product Number: {product.number}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
