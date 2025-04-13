
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
        <img src="https://www.greenmangaming.com/blog/wp-content/uploads/2020/11/Need-For-Speed-Hot-Pursuit-890x606.jpg" className="card-img-top" alt="Hot Pursuit" height="250px" />
        <div className="card-body">
          <h5 className="card-title">Hot Pursuit</h5>
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
