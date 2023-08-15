import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import styles from '../css/Courses.module.css';
import {FiPhoneCall} from 'react-icons/fi';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Slide, Zoom, Fade,Hinge } from 'react-awesome-reveal';
import tem from './brochure/testseries_em.pdf';
import ttm from './brochure/testseries_tm.pdf';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Testseries() {
    return (
        <div className={styles.trunstcont} id="testseriesscroll">
<Container>
            <Row xs={1} md={1} className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col>
                    <Card className={styles.testseriescon} style={{color:'white'}}>
                        <Card.Body>
                            <div className={styles.title_header}>
                    <Slide direction='up'><h1>Test Series</h1></Slide>
                    {/* <span className={styles.bar}></span><br/> <br/> */}
                    {/* <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5> */}
                    <h5>Test Series are available for TNPSC Exam</h5>

                </div>
                            <Card.Text>
                                <Zoom>
                                <h5 id={styles.trustpoints}>
                                    Test series are crucial for competitive exam preparation. They help assess knowledge, improve time management, provide exam familiarity, identify weak areas, offer practice and revision, track performance, and develop effective strategies. By simulating the actual exam, they enhance readiness and increase chances of success.
                                </h5>
                                </Zoom>
                                <div id="whyimpulsescroll"></div>
                            </Card.Text>

                            <div id={styles.trustbutton}>
                                    <div >
                                    <Button className={`${styles.coursebroucher} ${styles.cardbottom}`} style={{ border:  '3px solid #aa2c44', color: 'white', background:'transparent', borderRadius:'0px' }}>
                            <a href={ttm} style={{ color:'white', textDecoration: 'none' }}>Tamil Medium <ArrowForwardIcon/></a>
                            </Button>
                            <Button className={`${styles.coursebroucher} ${styles.cardbottom}`} style={{ border: '3px solid #aa2c44', color: 'white', background:'transparent', borderRadius:'0px' }}>
                            <a href={tem} style={{ color:'white', textDecoration: 'none' }}>English Medium <ArrowForwardIcon/></a>
                            </Button><br/>
                            <div style={{marginTop:'1vh'}}>
                            <a href="tel:8110980744" className={`${styles.courseenquiry} ${styles.cardbottom}`} style={{paddingBottom:'8px', background:'#aa2c44', borderRadius:'0px', border: '3px solid #aa2c44'}}>Contact <FiPhoneCall /> </a>

                            </div>
                                    </div>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        
    )
}

export default Testseries
