import M from 'materialize-css'
import '../../styles/AsteroidItem.scss';


import React, { useEffect } from 'react'





function AsteroidItem({ asteroidNo, asteroidName, approachingDate }) {
  useEffect(()=>{
    M.AutoInit();
  }, [])




  
  return (
    <div className="container myAsteroidItem">
      

      <div className="myAsteroidItemNo">
        { asteroidNo }
      </div>
      <div className="myAsteroidItemName" >
        { asteroidName }
      </div>
      <div className="myAsteroidItemApproachingDate">
        { approachingDate }
      </div>


      
    </div>
  )
}

export default AsteroidItem
