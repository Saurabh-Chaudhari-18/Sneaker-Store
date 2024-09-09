import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList() {
  const products = [
    { id: 1, name: 'Sneaker 1', price: '$100', image: '/assets/images/product1.jpg' },
    { id: 2, name: 'Sneaker 2', price: '$120', image: '/assets/images/product2.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
