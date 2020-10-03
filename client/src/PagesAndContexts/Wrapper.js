import React from 'react'
import { Route, Switch } from 'react-router-dom';



import Home from '../components/home/Home'
import Asteroids from '../components/asteroids/Asteroids';
import Details from '../components/details/Details';
import Search from '../components/search/Search';
import SearchResults from '../components/search/SearchResults';





function Wrapper() {
  return (
    <div id="myWrapper">
    <Switch>


      <Route exact path="/" component={Home} />
      <Route path="/asteroids" component={Asteroids} />
      <Route path="/details/:index" component={Details} />
      <Route path="/search" component={Search} />
      <Route path="/searchResults" component={SearchResults} />


    </Switch>
  </div>
  )
}

export default Wrapper
