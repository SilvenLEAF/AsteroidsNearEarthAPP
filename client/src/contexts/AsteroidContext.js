import React, { createContext, useState } from 'react'
import { asteroids } from '../FAKEDATA/AsteroidsData'


export const AsteroidContext = createContext();



function AsteroidContextProvider({ children }) {

  const [asteroidsInfo, setAsteroidsInfo] = useState(asteroids);


  return (
    <AsteroidContext.Provider value={{ asteroidsInfo, setAsteroidsInfo }} >
      { children }
    </AsteroidContext.Provider>
  )
}

export default AsteroidContextProvider
