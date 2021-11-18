import React, { useState, useEffect } from "react"
import { getAllStarships } from "../../../services/sw-api"
import { Link } from "react-router-dom"

const StarshipList = (props) => {
  const [starshipList, setStarShipList] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipList => setStarShipList(starshipList.results))
  },[])

return (
<>
  <h2 id="list">Starship List: </h2>
 {starshipList.length ? 
  <div class= "starship-container">

  {starshipList.map((starship, idx) => (
    
    <div class="card text-white bg-dark mb-3" id="starship">
      <Link
      
      to= {{pathname: `/starship/${idx}` }}
      state={{ starship }}
      key={idx}
    >
      {starship.name}
    </Link><br/>
    </div>
  ))}
  </div>
  
  :
  <>
    <h2>Loading Starships...</h2>
  </>}
  </>
  );
} 
  


export default StarshipList;