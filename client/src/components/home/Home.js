import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'





function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">

      <div id="myLandingIcon"></div>
      <div className="myLandingContentHolder">
        <h2 id="myLandingTitle" className="pageTitle">
          Hunting Asteroids?
        </h2>
        
        <div className="myLandingDescription">          
          Get your Asteroids on your fingertips. Hunt Asteroids near Earth. No matter in past present or future! Yay!
        </div>

        <h6 className="red-text myWithLoveFromSilvenLEAF" >
          --------With LOVE from SilvenLEAF
        </h6>
      </div>
      


      
    </div>
  )
}

export default Home
