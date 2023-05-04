import React from "react";

function PlantCard({id,name,price,url}) { 
  return (
    <li className="card" key={id}>  
      <img src={url} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
