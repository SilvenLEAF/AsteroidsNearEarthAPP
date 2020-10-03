import M from 'materialize-css'
// import '../../styles/Search.scss';
import '../../styles/Form.scss';







import React, { useState, useEffect, useContext } from 'react'


import { NASA_API_KEY } from '../../secrets/Secret';
import { getDate } from '../HELPERS/GetDate'

import { AsteroidContext } from '../../contexts/AsteroidContext';
import { useHistory } from 'react-router-dom';





function Search() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const { setAsteroidsInfo } = useContext(AsteroidContext)
  const history = useHistory();


  
  const [date, setDate] = useState('');
  

    const handleSubmit = async (e)=>{
      e.preventDefault();

      const datePickerValue = document.querySelector('.datepicker').value;
      console.log(datePickerValue)
  
      
      const startDate = "2025-12-27"
      const searchRes = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${ startDate }&api_key=${ NASA_API_KEY }`)
      const searchData = await searchRes.json();

      console.log(searchData);
      setAsteroidsInfo(searchData["near_earth_objects"][startDate])



      
      console.log('Hi there history')
      history.push('/searchResults')
    }

      


  return (  
    <div className="container">

      <form className="myDefaultForm" onSubmit={ handleSubmit } >
        <h2><i className="fa fa-search"></i> Search</h2>
       
        <div className="input-field">
          <input type="text" value={ date } onChange={ e => console.log(e.target.value) } className="datepicker" required />
          <label htmlFor="year">Date <span className="red-text">(*required)</span> </label>
        </div>




        <div className="input-field right-align">
          <button type="submit" className="btn waves-effect waves-light" ><i className="fa fa-search"></i> Search</button>
        </div>


      </form>
    
    
    
    </div>
  )
}

export default Search
