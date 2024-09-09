import React from 'react';
import './Home.css';

import ImageSlider from '../components/ImageSlider';


function Home() {
  return (
    <div className="home">
      <h2>Welcome to My Sneaker Site</h2>
      <p>Discover the best products and shop with ease.</p>
      <div className="hero">
        <ImageSlider></ImageSlider>
      </div>
    </div>
  );
}

export default Home;
