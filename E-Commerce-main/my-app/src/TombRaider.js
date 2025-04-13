import React, { useState } from 'react';
import './Play.css';

const Valorant = () => {
    const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500); 
  };
  return (
    <div className="container text-center mt-5">
      <div className="card mx-auto" style={{ width: '18rem' }}>
        <img src="https://c4.wallpaperflare.com/wallpaper/264/452/987/lara-croft-tomb-raider-face-hair-lara-croft-hd-wallpaper-preview.jpg" className="card-img-top" alt="Tomb Raider" height="250px" />
        <div className="card-body">
          <h5 className="card-title">Tomb Raider</h5>
          <button
            className={`btn btn-primary play-button ${clicked ? 'clicked' : ''}`}
            onClick={handleClick}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Valorant;
