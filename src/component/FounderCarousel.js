import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import styles from '../css/Founder.module.css';
import styles1 from '../css/Courses.module.css';
import { Slide, Zoom, Fade,Hinge } from 'react-awesome-reveal';

function FounderCarousel() {
  return (
    <Carousel data-bs-theme="dark" className={styles.carouselfon} fade style={{display:'flex',justifyContent:'center', alignItems:'center', zIndex:'-1'}}>
      <Carousel.Item interval={2000} style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
      <div className={styles.card}>
                <img src="/home/VigneshAnna.jpg" alt="John Doe" />
                <h3 className={styles.card_name}>Mr. S.Vignesh</h3>
                <p className={styles.card_text}>Managing Director</p>
                <Fade>
                <h5 style={{fontWeight:'300'}} className={styles.card_info}>We at IMPULSE Coaching Institute strive for the overall
                        development of students and travel with them till they achieve
                        their dream.
                        <br /><br />Our methodical teaching and testing add to the
                        advantage of our students. We make sure that we stand on top of
                        our industry by evolving regularly. # Join, experience and
                        succeed.</h5></Fade>
            </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}  style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
      <div className={styles.card}>
                <img src="/home/founder.jpg" alt="John Doe" />
                <h3 className={styles.card_name}>Mr. K. Palanivelu</h3>
                <p className={styles.card_text}>The Founder</p>
                <Fade>

                <h5 style={{fontWeight:'300'}}className={styles.card_info}>The importance we have attached to education for generations has
                              culminated in the development of Kalai Kovil Vidhya Mandhir
                              Matric. Higher Secondary School, Tirupur and Velan Vikhass Matric.
                              Higher Secondary School, Palani.<br/><br/> Moving beyond schools, we have
                              ventured into the next step - IMPULSE COACHING INSTITUTE, where we
                              successfully train students aspiring to get into the government
                              service. Join us and grow with us. All the best!</h5>
                              </Fade>
            </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default FounderCarousel;