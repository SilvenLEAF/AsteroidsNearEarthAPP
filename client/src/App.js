import 'materialize-css/dist/css/materialize.min.css'



import React from 'react';
import { BrowserRouter } from 'react-router-dom';



import AsteroidContextProvider from './contexts/AsteroidContext';
import ThingsInsideApp from './CONTROLPANEL/ThingsInsideApp';





function App() {
  return (
    <BrowserRouter basename="/AsteroidsNearEarthAPP">
      <AsteroidContextProvider>     
        
        <div className="App"><ThingsInsideApp/></div>

      </AsteroidContextProvider>
    </BrowserRouter>
  );
}

export default App;
