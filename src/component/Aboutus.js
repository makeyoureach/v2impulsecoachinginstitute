import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import styles from '../css/Aboutus.module.css';
import styles1 from '../css/Courses.module.css';
import {MdExpandMore} from 'react-icons/md';
import { Slide, Zoom, Fade } from 'react-awesome-reveal';

function Aboutus() {
  return (
    <div  id={styles.aboutscroll}>
<Container>
      <Row id={styles.aboutcontainercon}>
        
        <Col className={styles.aboutcol2}>
          <div className={styles1.title_header}>
                     <Slide direction='up'><h1>About Us</h1></Slide> 
                      <span className={styles1.bar}></span>
                      {/* <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4> */}
                  </div>
            <span>
              <Fade>
              <h5 className={styles.cardbodytext} style={{fontWeight:'300', lineHeight:'2rem', textAlign: 'center'}}> 
                {"      "}Welcome to IMPULSE, where we empower aspiring individuals to conquer competitive exams. With expert faculty, personalized attention, and a results-driven approach, we provide comprehensive coaching and guidance. Our mentors are not just subject matter experts but also motivators, nurturing individual talents to realize their full potential. We take pride in our track record of success, with top-ranked students in prestigious exams. Join us at IMPULSE and embark on a journey of growth and triumph. Contact us today to unlock your potential and achieve your exam goals.
              </h5>
              </Fade>
            </span>
            {/* <Button style={{ background: 'rgb(82, 124, 235)', color: 'white', border: '1px solid white' }} href='#whyimpulsescroll'>See More <MdExpandMore/></Button> */}
          </Col>
        <Col className={styles.aboutcol1}> 
        {/* <Zoom> */}
          {/* <iframe className={styles.ytsize} src="https://www.youtube.com/embed/o67RBy3ip8k?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          <iframe className={styles.ytsize} src="https://www.youtube.com/embed/bqwteydJivs?si=eGO43vx-MyG-Eei9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          {/* </Zoom> */}
        </Col>
      </Row>
    </Container>
    </div>
    
  )
}

export default Aboutus
