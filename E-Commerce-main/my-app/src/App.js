import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Community from './Community';
import GameDetail from './GameDetail';
import Cart from './Cart';
import Valorant from './Valorant'; 
import MostWanted from './MostWanted';
import TombRaider from './TombRaider';
import HotPursuit from './HotPursuit';
import ResidentEvil4 from './ResidentEvil4';
import JujutsuKaisen from './JujutsuKaisen';
import Login from './Login'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = ({ addToCart }) => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost/steam/steam.php")
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const handleClick = (id) => {
    navigate(`/game/${id}`);
  }

  const handleAddToCart = async (game) => {
    addToCart(game);
  }

  return (
    <>
      <h1 id="steam" className="text-capitalize text-center mt-3"><span id="multi-color">Steam</span></h1>
      <div className="container text-center">
        <div className="row">
          {games.slice(0, 3).map((game) => (
            <div 
              className="col card-container" 
              key={game.product_id}
            >
              <div className="card" style={{ width: "18rem" }} onClick={() => handleClick(game.product_id)}>
                <img src={game.product_img} className="card-img-top" alt={game.product_name} height="250px" style={{ backgroundColor: '#f8f9fa' }} />
                <div id="cont" className="card-body">
                  <h5 className="card-title">{game.product_name}</h5>
                  <p className="card-text">₹{game.product_price}</p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAddToCart(game); }} 
                    className="btn btn-primary add-button" 
                    style={{ backgroundColor: '#214a7b' }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="row">
          {games.slice(3).map((game) => (
            <div 
              className="col card-container" 
              key={game.product_id}
            >
              <div className="card" style={{ width: "18rem" }} onClick={() => handleClick(game.product_id)}>
                <img src={game.product_img} className="card-img-top" alt={game.product_name} height="250px" style={{ backgroundColor: '#f8f9fa' }} />
                <div id="cont" className="card-body">
                  <h5 className="card-title">{game.product_name}</h5>
                  <p className="card-text">₹{game.product_price}</p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAddToCart(game); }} 
                    className="btn btn-primary add-button" 
                    style={{ backgroundColor: '#214a7b' }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    </>
  );
}

const App = () => {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const addToCart = async (game) => {
    try {
      const response = await fetch('http://localhost/steam/steam.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'add_to_cart',
          user_id: 1, 
          product_id: game.product_id
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const result = await response.json();
      if (result.success) {
        setCart([...cart, game]);
      } else {
        console.error('Error adding to cart:', result.error);
      }
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  }

  const removeFromCart = async (index) => {
    const game = cart[index];
    try {
      const response = await fetch('http://localhost/steam/steam.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'remove_from_cart',
          user_id: 1, 
          product_id: game.product_id
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const result = await response.json();
      if (result.success) {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
      } else {
        console.error('Error removing from cart:', result.error);
      }
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  }

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('http://localhost/steam/steam.php?user_id=1');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const cartData = await response.json();
        setCart(cartData);
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      }
    };

    fetchCart();
  }, []);

  const handleLogin = (username) => {
    setUsername(username);
    navigate('/');
  };

  const handleLogout = () => {
    setUsername('');
    navigate('/login');
  };

  return (
    <>
      <Navbar username={username} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/valorant" element={<Valorant />} /> 
        <Route path="/most-wanted" element={<MostWanted />} />
        <Route path="/tomb-raider" element={<TombRaider />} />
        <Route path="/hot-pursuit" element={<HotPursuit />} />
        <Route path="/resident-evil-4" element={<ResidentEvil4 />} />
        <Route path="/jujutsu-kaisen" element={<JujutsuKaisen />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Add the login route */}
      </Routes>
    </>
  );
}

export default App;
