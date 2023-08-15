import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { Bounce, Fade, Slide } from 'react-awesome-reveal';
import styles from '../css/Courses.module.css';
import DownloadIcon from '@mui/icons-material/Download';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { NavLink } from 'react-router-dom';
import upsc_brochure from './brochure/upsc_brochure.pdf';
import ssc_brochure from './brochure/ssc_brochure.pdf';
import tnpsc_brochure from './brochure/tnpsc_brochure.pdf';

export default function ExploreCourse() {
    return (
        <div id='explorecourse'>
<Container>
            <Row className='exploreheading'>
                <Col>
                    <Slide direction='up'><div className={styles.title_header}>
                    <h1>Explore Our Courses</h1>
                    <span className={styles.bar}></span>
                    <h5>Are you ready to embark on a journey of knowledge and growth?</h5>
                </div></Slide>
                </Col>
            </Row>
            <Row className='explorecards' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Fade>
                <NavLink to="/tnpsc" style={{ color:'#3c959c', textDecoration: 'none' }} >
                    <Card sx={{ width: 345 }} className='explorecardmobile'>
                        <CardActionArea>
                        <Bounce><CardMedia
                                component="img"
                                height="140"
                                image="/v2/etnpsc1.png"
                                alt="green iguana"
                                className='explorecardimage ec1'
                            /></Bounce>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    TNPSC
                                </Typography> 
                                <Typography variant="body2" color="text.secondary" className='explorecardcontent'>
                                Welcome to the TNPSC section of IMPULSE, your pathway to success in Tamil Nadu Public Service Commission (TNPSC) exams. We specialize in providing comprehensive coaching and guidance tailored specifically for TNPSC aspirants. Our expert faculty members, with their in-depth knowledge and proven teaching methodologies, are committed to equipping you with the skills and knowledge required to excel in TNPSC exams. With our well-researched study materials, regular assessments, and personalized mentorship, we ensure you are well-prepared for the competitive TNPSC exams. Join us at IMPULSE  and let us guide you towards your goals in TNPSC. Contact us today to kickstart your TNPSC exam preparation journey.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{padding:'2vh'}}>
                            <Button  style={{ color:'white', background:'#3c959c' }}>
                            <a href={tnpsc_brochure} style={{ color:'white', textDecoration: 'none' }}><DownloadIcon/> Brochure</a>
                            </Button><Button size="small" style={{ color:'#3c959c' }}>
                            <NavLink to="/tnpsc" style={{ color:'#3c959c', textDecoration: 'none' }} >Learn More</NavLink>
                            </Button>
                        </CardActions>
                    </Card></NavLink>
                    </Fade>
                </Col>
                <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Fade><NavLink to="/upsc" style={{ color:'#3c8cb6', textDecoration: 'none' }} >
                    <Card sx={{ width: 345 }} className='explorecardmobile'>
                        <CardActionArea>
                        <Bounce><CardMedia
                                component="img"
                                height="140"
                                image="/v2/eupsc1.png"
                                alt="green iguana"
                                className='explorecardimage ec2'
                            /></Bounce>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    UPSC
                                </Typography>
                                <Typography variant="body2" color="text.secondary"  className='explorecardcontent'>
                                Welcome to the UPSC section of IMPULSE, your gateway to success in civil services examinations. We specialize in providing top-notch coaching and guidance for UPSC aspirants who dream of serving the nation. Our experienced faculty members, equipped with in-depth knowledge and proven teaching methodologies, are dedicated to helping you excel in every stage of the UPSC journey. With comprehensive study materials, regular assessments, and personalized mentorship, we ensure you have the tools to navigate the vast syllabus and develop the necessary skills to crack the UPSC exams. Join us at IMPULSE and let us pave the way for your success in UPSC. Contact us now to start your transformative UPSC preparation.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{padding:'2vh'}}>
                        <Button  style={{ color:'white', background:'#3c8cb6' }}>
                            <a href={upsc_brochure} style={{ color:'white', textDecoration: 'none' }}><DownloadIcon/> Brochure</a>
                            </Button><Button size="small" style={{ color:'#3c8cb6' }}>
                            <NavLink to="/upsc" style={{ color:'#3c8cb6', textDecoration: 'none' }} >Learn More</NavLink>
                            </Button>
                        </CardActions>
                    </Card></NavLink>
                    </Fade>
                </Col>
                <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Fade><NavLink to="/sscandbanking" style={{ color:'#bc455b', textDecoration: 'none' }} >
                    <Card sx={{ width: 345 }} className='explorecardmobile'>
                        <CardActionArea>
                            <Bounce><CardMedia
                                component="img"
                                height="140"
                                image="/v2/ebank1.png"
                                alt="green iguana"
                                className='explorecardimage ec3'
                            /></Bounce>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    SSC and Banking
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='explorecardcontent'>
                                Welcome to the Banking section of IMPULSE, your key to unlocking a successful career in the banking industry. We specialize in providing comprehensive coaching and guidance for banking exams conducted by leading institutions. Our experienced faculty members, equipped with extensive knowledge and expertise, are dedicated to preparing you for the challenges of banking exams. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{padding:'2vh'}}>
                        <Button  style={{ color:'white', background:'#bc455b' }}>
                            <a href={ssc_brochure} style={{ color:'white', textDecoration: 'none' }}><DownloadIcon/> Brochure</a>
                            </Button><Button size="small" style={{ color:'#bc455b' }}>
                            <NavLink to="/sscandbanking" style={{ color:'#bc455b', textDecoration: 'none' }} >Learn More</NavLink>
                            </Button>
                        </CardActions>
                    </Card></NavLink>
                    </Fade>
                </Col>
            </Row>
            <div id="aboutus"></div>
        </Container>
        </div>
        
    );
}
