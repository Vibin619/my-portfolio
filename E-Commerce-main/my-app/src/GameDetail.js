import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './GameDetail.css';

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/steam/steam.php`)
      .then(response => response.json())
      .then(data => {
        const foundGame = data.find(item => item.product_id === id);
        setGame(foundGame);
      })
      .catch(error => console.error('Error fetching game details:', error));
  }, [id]);

  return (
    <div className="container mt-5">
      {game ? (
        <div className="row">
          <div className="col-md-4">
            <img src={game.product_img} alt={game.product_name} className="img-fluid" style={{ maxHeight: "300px" }} />
          </div>
          <div className="col-md-8">
            <h1 className="mt-3">{game.product_name}</h1>
            <p id="desc" className="lead">{game.product_desp}</p>
            <p id="price" className="">{`₹${game.product_price}`}</p>
          </div>
        </div>
      ) : (
        <p>Game not found!</p>
      )}
    </div>
  );
}

export default GameDetail;
