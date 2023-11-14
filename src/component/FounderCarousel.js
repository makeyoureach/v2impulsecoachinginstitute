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
                <h3 className={styles.card_name}>Mr. S Vignesh</h3>
                <p className={styles.card_text}>Managing Director, Co-founder</p>
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
                <img src="/home/founder2.jpg" alt="John Doe" />
                <h3 className={styles.card_name}>P Gayathridevi</h3>
                <p className={styles.card_text}>Director, Co-founder</p>
                <Fade>

                <h5 style={{fontWeight:'300'}}className={styles.card_info}>At Impulse Coaching Institute, we aim to empower aspiring students to achieve their dreams of joining the esteemed Civil Service. We prioritize the holistic development of our students, providing them with the knowledge, skills, and mindset needed for success in competitive exams and beyond. Our commitment goes beyond coaching – we are dedicated to guiding students towards their ambitions, instilling a sense of purpose, and nurturing future leaders who will make meaningful contributions to society through their roles in civil services.</h5>
                              </Fade>
            </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default FounderCarousel;