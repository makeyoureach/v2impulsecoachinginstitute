import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../css/Courses.module.css';
import { FiPhoneCall } from 'react-icons/fi';
import { Slide, Zoom, Fade,Hinge } from 'react-awesome-reveal';
import trust_brochure from './brochure/trust_brochure.pdf';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

function Trustcard() {
    return (
        <div className='tructbackcolor'>
            <Fade>

            <Container>
            <div className={styles.title_header}>
                    <Slide direction='up'><h1>Impulse Educational Trust</h1></Slide>
                    <span className={styles.bar}></span>
                    {/* <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4> */}
                </div>
                <Row className='rowtrustcard'>
                    <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}} md={6}>
                    <img src="/pic/trust.png" id='trustimg' />
                    </Col>
                    <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}} md={6}>
                        <div>
                        <h5 className='para_com'>{'            '}Welcome to the Impulse Educational Trust, a trusted institution dedicated to preparing individuals for competitive exams. With a strong focus on excellence and success, our educational trust is committed to providing comprehensive coaching and guidance for a wide range of competitive exams.
                                    <br />
                                    <br />
                                    At Impulse Educational Trust, we understand the challenges and aspirations of those aspiring to excel in competitive exams.
                                </h5>
                                <div style={{ display: 'flex', justifyContent: 'start', alignContent: 'center' }}>
                            <Button className={`${styles.coursebroucher} ${styles.cardbottom}`} style={{ background: '#aa2c44', color: 'white', border: '3px solid #aa2c44', borderRadius:'0px' }}>
                            <a href={trust_brochure} style={{ color:'white', textDecoration: 'none' }}>BROCHURE</a></Button>
                            <a href="tel:9003557734" className={`${styles.courseenquiry} ${styles.cardbottom}`} style={{paddingBottom:'8px',color: '#aa2c44',  background:'white', borderRadius:'0px', border: '3px solid #aa2c44'}}><VolunteerActivismIcon/> Donate</a>
                        </div>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
            </Fade>
        </div>

    )
}

export default Trustcard
