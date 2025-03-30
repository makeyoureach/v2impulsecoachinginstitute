import React from 'react'
import DarkCarousel from './DarkCarousel'
import Aboutus from './Aboutus'
import ExploreCourse from './ExploreCourse'
import Testseries from './Testseries'
import Parallaxcard from './Prallaxcard'
import Trustcard from './Trustcard'
import Whyimpulse from './Whyimpulse'
import Reviewcard from './Reviewcard'
import Founder from './Founder'
import Footer from './footer/Footer'
import GoogleMap from './GoogleMap'
import Gallery2 from './Gallery2'
import FounderCarousel from './FounderCarousel'
import Navigation from './Navigation'
import Alert from './alert/Alert'

function Home() {
  window.scrollTo(0, 0);

  return (
    <div className='homecontainer'>
      <Alert />
      <Navigation scroll={true} />
      <DarkCarousel />
      <Aboutus />
      <ExploreCourse />
      <Parallaxcard />
      <Trustcard />
      <Whyimpulse />
      <Reviewcard />
      <Gallery2 />
      {/* <Founder/> */}
      <FounderCarousel />
      <GoogleMap />
      <Footer />
    </div>
  )
}

export default Home
