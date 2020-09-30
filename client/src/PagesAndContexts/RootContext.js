import React from 'react'
import AsteroidContextProvider from '../contexts/AsteroidContext'

function RootContext({ children }) {
  return (
    <>
      <AsteroidContextProvider>
        { children }
      </AsteroidContextProvider>
    </>
  )
}

export default RootContext
