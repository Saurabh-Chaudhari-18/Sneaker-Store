import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Check if user is authenticated by looking for token/session
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const addToCart = (product, navigate) => {
    if (isAuthenticated) {
      setCartItems([...cartItems, product]);
    } else {
      // If not authenticated, redirect to login page
      navigate('/login');
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/shop" 
            element={<Shop addToCart={addToCart} isAuthenticated={isAuthenticated} />} 
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route 
            path="/login" 
            element={<Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
