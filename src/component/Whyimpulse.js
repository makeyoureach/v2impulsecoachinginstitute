import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SmallImageSlider from './SmallImageSlider'
import { TiTick } from 'react-icons/ti';
import styles from '../css/Courses.module.css';
import { Slide, Zoom, Fade,Hinge } from 'react-awesome-reveal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function Whyimpulse() {
  return (
    <div id='whyimpulsecontainer'>
 <Container>
        <Row id={styles.whyimpulserowcon}>
            <Col style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}> 
          <Slide direction='left'>

            <div className={styles.title_header}>
            <h1>Why Impulse is unique{" "}?</h1>

                    {/* <span className={styles.bar}></span> */}
                    {/* <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4> */}
                </div>
            <div className='whyimpulsepoints'>
                <div style={{display:'flex'}} className='divwhyimp'>
                  <div><CheckCircleIcon className='titick'/></div><h5 className='wypoint'> Integrated course for Prelims and Mains</h5>
                </div>
                <div style={{display:'flex'}} className='divwhyimp'>
                  <div><CheckCircleIcon className='titick'/></div><h5 className='wypoint'> Separate batch for college students</h5>
                </div>
                <div style={{display:'flex'}} className='divwhyimp'>
                  <div><CheckCircleIcon className='titick'/></div><h5 className='wypoint'> Daily Current Affairs material and Quiz</h5>
                </div>
                <div style={{display:'flex'}} className='divwhyimp'>
                  <div><CheckCircleIcon className='titick'/></div><h5 className='wypoint'> One to One mentorship</h5>
                </div>
                <div style={{display:'flex'}} className='divwhyimp'>
                  <div><CheckCircleIcon className='titick'/></div><h5 className='wypoint'> Compatibility between Online and Offline course</h5>
                </div>
                <div style={{display:'flex'}} className='divwhyimp'>
                  <div><CheckCircleIcon className='titick'/></div><h5 className='wypoint'> One-time fees till you make it to the final list</h5>
                </div>
            </div>
          </Slide>

            </Col>

            <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Fade>

            <SmallImageSlider/>
          </Fade>

            </Col>

        </Row>
    </Container>
    </div>
  )
}

export default Whyimpulse
