import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plant,setPlant] = useState([]) 
  const [search,setSearch] = useState("")

  useEffect( () => {
    fetch("http://localhost:3000/plants")
    .then(r => r.json())
    .then(plants => setPlant(plants))  

  })

  function handleAddItem(data){
      setPlant([...plant,data])  
  }

  

  return (
    <main>
      <NewPlantForm onAddItem = {handleAddItem}/>
      <Search setSearch={setSearch}/> 
      <PlantList plant={plant}  search={search}/>  
    </main>
  );
}

export default PlantPage;
