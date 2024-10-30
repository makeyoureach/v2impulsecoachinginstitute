import React from 'react'

import Navigation from '../Navigation'
import Footer from '../footer/Footer'
import LoginView from './LoginView';

function LoginPage({onLogin}) {
  window.scrollTo(0, 0);

  return (
    <div>
      <Navigation/>
        <LoginView onLogin={onLogin}/>
      {/* <Footer/> */}
    </div>
  )
}

export default LoginPage
