import React from 'react'
import styles from '../css/Founder.module.css';
import styles1 from '../css/Courses.module.css';
import { Slide, Zoom, Fade,Hinge } from 'react-awesome-reveal';

function Founder() {
  return (
    <div style={{backgroundColor:'aliceblue'}}>
      <Fade className={styles.container}>
        {/* <div className={styles1.title_header}>
                   <Slide direction='up'><h1>Our Team</h1></Slide> 
                    <span className={styles1.bar}></span>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                </div> */}
        <div className={styles.cards}>

            <div className={styles.card}>
                <img src="/home/VigneshAnna.jpg" alt="John Doe" />
                <h3 className={styles.card_name}>Mr. S.Vignesh</h3>
                <p className={styles.card_text}>Managing Director</p>
                <h5 style={{fontWeight:'300'}} className={styles.card_info}>We at IMPULSE Coaching Institute strive for the overall
                        development of students and travel with them till they achieve
                        their dream.
                        <br /><br />Our methodical teaching and testing add to the
                        advantage of our students. We make sure that we stand on top of
                        our industry by evolving regularly. # Join, experience and
                        succeed.</h5>
            </div>
            <div className={styles.card}>
                <img src="/home/founder.jpg" alt="John Doe" />
                <h3 className={styles.card_name}>Mr. K. Palanivelu</h3>
                <p className={styles.card_text}>The Founder</p>
                <h5 style={{fontWeight:'300'}}className={styles.card_info}>The importance we have attached to education for generations has
                              culminated in the development of Kalai Kovil Vidhya Mandhir
                              Matric. Higher Secondary School, Tirupur and Velan Vikhass Matric.
                              Higher Secondary School, Palani.<br/><br/> Moving beyond schools, we have
                              ventured into the next step - IMPULSE COACHING INSTITUTE, where we
                              successfully train students aspiring to get into the government
                              service. Join us and grow with us. All the best!</h5>
            </div>


        </div>
    </Fade>
    </div>
  )
}

export default Founder
