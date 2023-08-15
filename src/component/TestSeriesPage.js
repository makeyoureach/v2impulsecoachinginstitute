import React from 'react'

import Navigation from './Navigation'
import Footer from './footer/Footer'
import Parallaxcard from './Prallaxcard'

function TestSeriesPage() {
  window.scrollTo(0, 0);

  return (
    
    <div>
      <Navigation/>
        <Parallaxcard/>
      <Footer/>
    </div>
  )
}

export default TestSeriesPage
