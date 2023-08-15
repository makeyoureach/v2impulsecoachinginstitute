import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../css/Reviewcard.module.css';
import styles1 from '../css/Courses.module.css';
import { Slide, Zoom, Fade,Hinge } from 'react-awesome-reveal';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

function Reviewcard() {
    return (
        <div className={styles.reviewcon} id='reviewscroll'>
            <Container id={styles.reviewcontainer1} > 
                <div >
                <div className={styles1.title_header}>
                    <Slide direction='up'><h1>Reviews</h1></Slide>
                    {/* <span className={styles1.bar}></span><br/> <br/> */}
                    <h5>🌟🌟🌟🌟🌟 Rated Google Review</h5>
                </div>

<Carousel data-bs-theme="dark" className={styles.reviewcarousel}>
                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                            
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Stack direction="row" spacing={2}>
                                <Avatar>JL</Avatar>
                                </Stack>
                                <h5 className={styles.reviewername}>
                                    Jeya Lakshmi 
                                </h5>
                                <h5 style={{fontWeight:'300', wordSpacing:'0.2rem'}}>
                                They give very good mentor service. Offline & online classes are also too good. Apart from this, best motivation institute. They won't give stressful schedules. All faculties are too good. Anytime they will clear our doubts.. they will give good hope to me.
                                </h5>
                                </div>
                                
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Stack direction="row" spacing={2}>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>ND</Avatar>
                                </Stack>
                                <h5 className={styles.reviewername}>
                                Nandini Devi 
                                </h5>
                                <h5 style={{fontWeight:'300', wordSpacing:'0.2rem'}}>
                                The way they teach subjects are easily understandable. Weekly test for both Tamil n GS.
Also one to one mentorship helps to clear all our doubts without any delay. Overall good teaching n test series n revision tests makes us completely thorough in the subjects. 
                                </h5>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Stack direction="row" spacing={2}>
                                <Avatar sx={{ bgcolor: deepPurple[500] }}>KM</Avatar>
                                </Stack>
                                <h5 className={styles.reviewername}>
                                Kasthuri M  
                                </h5>
                                <h5 style={{fontWeight:'300', wordSpacing:'0.2rem'}}>
                                Best institute for aspirant. Before I didn't get the idea how to clear tpsc but now get idea for study. They conduct weekly 3 test series it's more helpful. Knowledge & friendly staffs they shared their experience & motivated. Individual mentors for students they gudie & motivated. Thanks you impulse coaching institute.
                                </h5>
                                </div>
                            </div>
                        </Carousel.Item>
                </Carousel>
                </div>
                
            </Container>
        </div>


    );
}

export default Reviewcard;