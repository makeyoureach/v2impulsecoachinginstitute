import React from 'react'
import Navigation from './Navigation'
import ExploreCourse from './ExploreCourse'
import Footer from './footer/Footer'

function ExploerCoursePage() {
  window.scrollTo(0, 0);

  return (
    <div>
      <Navigation/>
      <ExploreCourse/>
      <Footer/>
    </div>
  )
}

export default ExploerCoursePage
