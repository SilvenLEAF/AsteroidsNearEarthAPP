import M from 'materialize-css'
// import '../../styles/Search.scss';
import '../../styles/Form.scss';


import React, { useState, useEffect, useContext } from 'react'


// import { SearchContext } from '../../contexts/SearchContext';
import { useHistory } from 'react-router-dom';





function Search() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  // const { setSearchResults } = useContext(SearchContext)
  const history = useHistory();


  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [fullTime, setFullTime] = useState(false);
  

    const handleSubmit = async (e)=>{
      e.preventDefault();

      console.log({ description, location, fullTime });
      

      const jobRes = await fetch(`https://github-jobs-proxy.appspot.com/positions?description=${ description }&location=${ location }`)
      const jobData = await jobRes.json();

      console.log(jobData);
      // setSearchResults(jobData)





      setDescription('');
      setLocation('');
      setFullTime(false);

      const trueRadio = document.querySelector('#trueRadio');
      const falseRadio = document.querySelector('#falseRadio');
      
      
      trueRadio.checked = false;
      falseRadio.checked = true;

      console.log('Hi there history')
      history.push('/searchResults')
    }



  return (  
    <div className="container">

      <form className="myDefaultForm" onSubmit={ handleSubmit } >
        <h2><i className="fa fa-search"></i> Search</h2>
       
        <div className="input-field">
          <input type="number" max={ 2099 } min={ 1700 } value={ description } onChange={ e => setDescription(e.target.value) } />
          <label htmlFor="description">Year <span className="red-text">(e.g. 2020)</span> </label>
        </div>
        
        
        
        
        <div className="input-field">
          <input type="number" max={ 12 } min={ 1 } value={ description } onChange={ e => setDescription(e.target.value) } />
          <label htmlFor="description">Month in Number <span className="red-text">(e.g. Jan is 1)</span> </label>
        </div>



        
        <div className="input-field">
          <input type="number" max={ 27 } min={ 1 } value={ description } onChange={ e => setDescription(e.target.value) } />
          <label htmlFor="description">Date <span className="red-text">(e.g. 27)</span> </label>
        </div>





        <div className="input-field right-align">
          <button type="submit" className="btn waves-effect waves-light" ><i className="fa fa-search"></i> Search</button>
        </div>


      </form>
    
    
    
    </div>
  )
}

export default Search
