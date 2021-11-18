import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import { getDetails } from '../../../services/sw-api';
import { Link } from 'react-router-dom';


const StarshipDetail = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})

  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipDetailsFromApi => setStarshipDetails(starshipDetailsFromApi))
  }, [])

  return ( 
    <>
    <h1 id="starship-det"><strong>Starship Details:</strong></h1>
      <div>
        <h3 class="list-group-item">
          <strong>Name: </strong> {starshipDetails.name}
        </h3>
          <h3 class="list-group-item"> <strong>Model: </strong>{starshipDetails.model}</h3>
          <div id="home-btn">
          <button type="button" class="btn btn-outline-dark">
          <Link to= {`/`} >Return Home</Link>
          </button>
          </div>

      </div>
    </>
  );
}


export default StarshipDetail;