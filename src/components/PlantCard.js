import React from "react";

function PlantCard({id,name,price,url,handlePrice}) { 
  return (
    <li className="card" key={id}>  
      <img src={url} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price} <button onClick={handlePrice} className="primary">Edit</button></p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
