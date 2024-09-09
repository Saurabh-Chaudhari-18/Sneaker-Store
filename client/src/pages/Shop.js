import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Shop.css';
import i1 from '../assets/images/domino-studio-164_6wVEHfI-unsplash.jpg';
import i3 from '../assets/images/pexels-mnzoutfits-1598505.jpg';
import i6 from '../assets/images/patrick-hodskins-B6LFgATILWI-unsplash.jpg';

function Shop({ addToCart }) {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const products = [
    {
      id: 1,
      name: 'Nike Air Jordan',
      price: 170,
      imageUrl: i1,
    },
    {
      id: 2,
      name: 'Nike Air Force 1',
      price: 220,
      imageUrl: i3,
    },
    {
      id: 3,
      name: 'LV-Cold',
      price: 450,
      imageUrl: i6,
    },
  ];

  return (
    <div className="shop-container">
      <h2>Shop Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product, navigate)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
