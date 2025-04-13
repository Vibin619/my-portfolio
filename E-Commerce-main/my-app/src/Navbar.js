import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = ({ username, onLogout }) => {
  const games = [
    { name: "Valorant", path: "/valorant" },
    { name: "Most Wanted", path: "/most-wanted" },
    { name: "Tomb Raider", path: "/tomb-raider" },
    { name: "Hot Pursuit", path: "/hot-pursuit" },
    { name: "Resident Evil 4", path: "/resident-evil-4" },
    { name: "Jujutsu Kaisen", path: "/jujutsu-kaisen" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bar-warning goku">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: '#000000' }}>STEAM</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" style={{ color: '#ffffff' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/community" className="nav-link" style={{ color: '#ffffff' }}>Community</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: '#ffffff' }}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" style={{ color: '#ffffff' }}>Cart</Link>
            </li>
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="navbarDropdown" style={{ color: '#ffffff' }}>
                  MY GAMES
                </Dropdown.Toggle>
                <Dropdown.Menu aria-labelledby="navbarDropdown">
                  {games.map((game, index) => (
                    <Dropdown.Item key={index} as={Link} to={game.path}>{game.name}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="transparent" id="profileDropdown" style={{ border: 'none', background: 'transparent', padding: 0 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png" alt="Steam" className="center" style={{ width: '40px', height: '40px' }} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.ItemText>{username}</Dropdown.ItemText>
            <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Navbar;
