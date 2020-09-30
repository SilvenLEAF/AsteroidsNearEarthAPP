import M from 'materialize-css'
import '../../styles/Home.scss';


import { NASA_API_KEY } from '../../secrets/Secret';


import React, { useContext, useEffect, useState } from 'react'
import { usePaginatedQuery } from 'react-query'


import { AsteroidContext } from '../../contexts/AsteroidContext';







const getAsteroids = async (page)=>{
  

  let startDate = '2020-12-07'


  const asteroidsRes = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${ startDate }&api_key=${ NASA_API_KEY }`)
  const asteroidsData = await asteroidsRes.json();

  console.log(asteroidsData);
  return asteroidsData
}











function Asteroids() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const { setAsteroidsInfo } = useContext(AsteroidContext)
  const [page, setPage] = useState('')

  const { resolvedData, latestData, status } = usePaginatedQuery([page], getAsteroids)
  if(resolvedData) setAsteroidsInfo(resolvedData);













  return (
    <div className="container">

      <h2 className="pageTitle">Asteroids</h2>

      
    </div>
  )
}

export default Asteroids
