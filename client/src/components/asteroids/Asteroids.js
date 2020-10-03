import M from 'materialize-css'
import '../../styles/Asteroids.scss';


// import { asteroids } from '../../FAKEDATA/AsteroidsData';
import { NASA_API_KEY } from '../../secrets/Secret';
import { getDate } from '../HELPERS/GetDate'


import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePaginatedQuery } from 'react-query'


import { AsteroidContext } from '../../contexts/AsteroidContext';
import AsteroidItem from './AsteroidItem';







const getAsteroids = async (startDate, pageLink)=>{
  

  

  const asteroidsRes = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${ startDate }&api_key=${ NASA_API_KEY }`)
  const asteroidsData = await asteroidsRes.json();

  console.log(asteroidsData);
  return asteroidsData["near_earth_objects"][startDate]
}











function Asteroids() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const { setAsteroidsInfo } = useContext(AsteroidContext)
  const [pageLink, setPageLink] = useState('')
  const startDate = getDate();

  const { resolvedData, latestData, status } = usePaginatedQuery([startDate, pageLink], getAsteroids)
  if(resolvedData) setAsteroidsInfo(resolvedData);













  return (
    <div className="container">

      <h2 className="pageTitle">Asteroids (today)</h2>
      
      <div className="asteroidItemsHolder">
        {
          resolvedData && resolvedData.map((item, index)=>{            
            return (
              <Link to={ '/details/' + index } key={ index } >
                <AsteroidItem asteroidNo={ index + 1 } asteroidName={ item.name } approachingDate={ item["close_approach_data"][0]["close_approach_date_full"].split(' ')[0] } />
              </Link>
            )
          })
        }
      </div>

    </div>
  )
}

export default Asteroids
