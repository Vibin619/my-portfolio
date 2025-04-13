
import './Play.css';
import React, { useState } from 'react';

const Valorant = () => {
    const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500); 
  };
  return (
    <div className="container text-center mt-5">
      <div className="card mx-auto" style={{ width: '18rem' }}>
        <img src="https://images7.alphacoders.com/416/thumb-1920-416648.jpg" className="card-img-top" alt="Most Wanted" height="250px" />
        <div className="card-body">
          <h5 className="card-title">Most Wanted</h5>
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
