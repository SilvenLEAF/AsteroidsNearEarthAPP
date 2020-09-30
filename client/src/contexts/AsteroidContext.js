import React, { createContext, useState } from 'react'



export const AsteroidContext = createContext();



function AsteroidContextProvider({ children }) {

  const [asteroidsInfo, setAsteroidsInfo] = useState();


  return (
    <AsteroidContext.Provider value={{ asteroidsInfo, setAsteroidsInfo }} >
      { children }
    </AsteroidContext.Provider>
  )
}

export default AsteroidContextProvider
