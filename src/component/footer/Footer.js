import React from 'react'
import './Footer.css';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
<div className="footer">
  <div className="container">
    <div className="footer-logo">
      <a href="#">
        <img src="/v2/logo/logowhite.png" alt="Impulse Logo" style={{width:'200px'}} />
      </a>
    </div>
    <div className="footer-social-media">
      {/* <h5>Address</h5> */}
    </div>
    <div className="footer-links col1">
      <NavLink to="/home#">Home</NavLink>
      <NavLink to="/explorecourse">Explore Course</NavLink>
      <NavLink to="/testseries">Test Series</NavLink>
      <NavLink to="/home">About Us</NavLink>

    </div>
    <div className="footer-links col2">
      <NavLink to="/tnpsc">TNPSC</NavLink>
      <NavLink to="/upsc">UPSC</NavLink>
      <NavLink to="/sscandbanking">SSC AND BANKING</NavLink>
    </div>
    <div className="footer-cta">
    <a href="tel:8110980744" style={{padding:'8px', textDecoration:'none', color:'white', background:'#aa2c44', borderRadius:'0px', border: '3px solid #aa2c44'}}>Enroll Now</a>
                                    
    </div>
    <div className="footer-copyright">
      <p>© Impulse. All Rights Reserved</p>
    </div>
  </div>
  <div className="attribution">
    {/* Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" className="outer-link" target="_blank">Frontend Mentor</a>. Coded by <span className="outer-link">Mohamed Aridah</span>.
    <ul className="social-media">
      <li>
        <a href="https://www.github.com/MohamedAridah" title="Visite My Github Account">
          <img src="https://raw.githubusercontent.com/devicons/devicon/1a5dbfa142a9677d6ddaa05d05f377ac23af9a2e/icons/github/github-original.svg" className="light" alt="My Github Account" />
        </a>
      </li>
      <li>
        <a href="https://www.codepen.io/FedLover" title="Visite My Codepen Account">
          <img src="https://raw.githubusercontent.com/devicons/devicon/1a5dbfa142a9677d6ddaa05d05f377ac23af9a2e/icons/codepen/codepen-plain.svg" className="light" alt="My codepen Account" />
        </a>
      </li>
      <li>
        <a href="https://www.frontendmentor.io/profile/MohamedAridah" title="Visite My Frontend Mentor Account">
          <img src="https://mohamedaridah.github.io/hosted-assets/FEM.png" alt="My Frontend Mentor Account" />
        </a>
      </li>
    </ul> */}
  </div>
</div>

  )
}

export default Footer