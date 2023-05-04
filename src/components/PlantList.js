import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plant}) { 
 
  return (
    <ul className="cards">
      {plant.map((p) => {
        return <PlantCard id = {p.id} name = {p.name} price = {p.price} url = {p.image}/>
      })}
    </ul>
  );
}

export default PlantList;
