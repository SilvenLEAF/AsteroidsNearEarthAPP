import '../../styles/footer/MobileFooterNav.scss'

import React from 'react'
import { Link } from 'react-router-dom'







function MobileFooterNav() {
  return (
    <div id="myMobileFooterNav" className="container hide-on-large-only">




      
      <div>
        <div className="myFooterIcons">
          <Link to="/">
          <i className="fa fa-home"></i> Home
          </Link>
        </div>          
      </div>
      
    


      <div>
        <div className="myFooterIcons">
          <Link to="/search">
          <i className="fa fa-search"></i> Search
          </Link>
        </div>          
      </div>



      <div>
        <div className="myFooterIcons">
          <Link to="/asteroids">
          <i className="fa fa-globe"></i> Today
          </Link>
        </div>          
      </div>




      

    
  






    </div>
  )
}

export default MobileFooterNav
