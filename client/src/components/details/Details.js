import M from 'materialize-css'
import '../../styles/Details.scss';


import { asteroids } from '../../FAKEDATA/AsteroidsData';
import { AsteroidContext } from '../../contexts/AsteroidContext';


import React, { useContext, useState, useEffect } from 'react'





function Details(props) {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  const { asteroidsInfo } = useContext(AsteroidContext);
  const index = props.match.params.index;
  const item = asteroidsInfo[parseInt(index)];
  console.log(index)

  const [startDate, setStartDate] = useState("2025-12-27")
  // const item = asteroids["near_earth_objects"][startDate][0]
  const diameter = item["estimated_diameter"].meters;
  const diameterUnit = "m"

  return (
    <div className="container myDetailsPage">

      <h2 className="pageTitle">Details</h2>


      <div className="infoHolder infoNameHolder">
        <div className="infoTitle">
            Name:
        </div>
        
        <div className="infoAnswer">
            { item.name }
        </div>
      </div>







      <div className="infoHolder infoAppearedDateHolder">
        <div className="infoTitle">
          Appeared on:
        </div>
        
        <div className="infoAnswer">
          { item["close_approach_data"][0]["close_approach_date_full"] }
        </div>
      </div>







      <div className="infoHolder infoDiameterHolder">
        <div className="infoTitle">
          Diameter:
        </div>

        <div className="infoAnswer">
          <p> <span>Min:</span> { diameter["estimated_diameter_min"] + diameterUnit }  </p>
          <p> <span>Max:</span> { diameter["estimated_diameter_max"] + diameterUnit }  </p>
        </div>
      </div>








      <div className="infoHolder infoIsDangerousHolder">
        <div className="infoTitle">
          Is potentially dangerous?
        </div>
        
        <div className="infoAnswer">
          { item["is_potentially_hazardous_asteroid"] ? `Yes, it is!` : `Nope, it isn't` }
        </div>
      </div>








      <div className="infoHolder infoMagnitudeHolder">
        <div className="infoTitle">
          Absolute magnitude:
        </div>
        
        <div className="infoAnswer">
          { item["absolute_magnitude_h"] }
        </div>
      </div>








      <div className="infoHolder infoMissDistanceHolder">
        <div className="infoTitle">
          Miss distance:
        </div>
        
        <div className="infoAnswer">
          { item["close_approach_data"][0]["miss_distance"].kilometers } km
        </div>
      </div>




      <div className="infoHolder infoVelocityHolder">
        <div className="infoTitle">
          Relative velocity:
        </div>
        
        <div className="infoAnswer">
          { item["close_approach_data"][0]["relative_velocity"]["kilometers_per_second"] } km/s
        </div>
      </div>


      
    </div>
  )
}

export default Details
