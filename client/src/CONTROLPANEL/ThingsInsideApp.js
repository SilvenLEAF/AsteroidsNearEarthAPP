import React from 'react'



import Navbar from '../components/layouts/Navbar'
import Wrapper from '../CONTROLPANEL/Wrapper';

import Footer from '../components/layouts/Footer'
import MobileFooterNav from '../components/layouts/MobileFooterNav'

import BackToTopButton from '../components/layouts/BackToTopButton'






function ThingsInsideApp() {
  return (
    <>
      <Navbar/>
      <Wrapper/>

      
      <BackToTopButton/>
      <Footer/>
      <MobileFooterNav/>       
    </>
  )
}

export default ThingsInsideApp
