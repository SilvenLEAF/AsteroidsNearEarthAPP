import 'materialize-css/dist/css/materialize.min.css'



import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import RootContext from './PagesAndContexts/RootContext';






import Navbar from './components/layouts/Navbar'
import Wrapper from './PagesAndContexts/Wrapper';


import Footer from './components/layouts/Footer'
import MobileFooterNav from './components/layouts/MobileFooterNav'

import BackToTopButton from './components/layouts/BackToTopButton'






function App() {
  return (
    <BrowserRouter basename="/AsteroidsNearEarthAPP">
      <RootContext>
         
        
        <div className="App">
          <Navbar/>
          <Wrapper/>

          
          <BackToTopButton/>
          <Footer/>
          <MobileFooterNav/>
        </div>

        </RootContext>
    </BrowserRouter>
  );
}

export default App;

