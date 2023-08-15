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
    {/* <div className="footer-social-media">
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <title>Facebook</title>
          <path fill="#FFF" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
        </svg>
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
          <title>Youtube</title>
          <path fill="#FFF" d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z" />
        </svg>
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
          <title>Instagram</title>
          <path fill="#FFF" d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
        </svg>
      </a>
    </div> */}
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