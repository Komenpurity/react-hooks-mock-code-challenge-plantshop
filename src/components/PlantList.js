import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plant,setPlant] = useState([]) 

  useEffect( () => {
    fetch("http://localhost:3000/plants")
    .then(r => r.json())
    .then(plants => setPlant(plants))  

  })

  return (
    <ul className="cards">
      {plant.map((p) => {
        return <PlantCard id = {p.id} name = {p.name} price = {p.price} url = {p.image}/>
      })}
    </ul>
  );
}

export default PlantList;
