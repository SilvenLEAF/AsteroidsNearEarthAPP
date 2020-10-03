import M from 'materialize-css'
import '../../styles/Home.scss';


import { asteroids } from '../../FAKEDATA/AsteroidsData';



import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



import { AsteroidContext } from '../../contexts/AsteroidContext';
import AsteroidItem from '../asteroids/AsteroidItem';









function SearchResults() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const { asteroidsInfo } = useContext(AsteroidContext)











  
  return (
    <div className="container">

      <h2 className="pageTitle">Asteroids</h2>
      
      <div id="asteroidItemsHolder">
        {
          asteroidsInfo && asteroidsInfo.map((item, index)=>{
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

export default SearchResults
