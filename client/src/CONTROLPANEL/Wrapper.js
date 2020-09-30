import React from 'react'
import { Route, Switch } from 'react-router-dom';



import Home from '../components/home/Home'
import Asteroids from '../components/asteroids/Asteroids';





function Wrapper() {
  return (
    <div id="myWrapper">
    <Switch>


      <Route exact path="/" component={Home} />
      <Route path="/asteroids" component={Asteroids} />


    </Switch>    
  </div>
  )
}

export default Wrapper
