
import React, { useState } from 'react';
import { Tabs, Tab, Row, Col, Table, Dropdown, Navbar, Nav, Button } from 'react-bootstrap';
import Eligibility from './Eligibility';
import Examinationstructure from './Examinationstructure';
import Listofservices from './Listofservices';
import './Upsc.css';
import Footer from '../../footer/Footer';
import Navigation from '../../Navigation';

const Upsc = () => {
    window.scrollTo(0, 0);
    const [key, setKey] = useState('brochure');
    const [tab,setTab] = useState([true]);
    const [subtab,setSubTab] = useState([true]);
    
    const tabHandler=(tab)=>{
         let temparray = Array();
         let temparray2 = Array();
         temparray[tab] = true;
         setTab(temparray);
         setSubTab(temparray2);
         console.log(tab);
    }

    const tabHandler_sub=(subtab)=>{
        tabHandler(1);
        let temparray = Array();
        temparray[subtab] = true;
        setSubTab(temparray);
   }

    return (
        <section style={{overflowX:'hidden'}} id='upsc'>
            <Navigation/>
            <div class="page-header">
            
            <div class='page-head-title'>
                    <a href="#" class="developer6669">
                        <div class="img-container">
                            <img src="pic/upsclogo.webp" alt="" />
                        </div>
                    </a>  
                    <h5 className='course_heading'>UPSC</h5>
            </div>  
            <div class="social-icons">
                <a href="https://www.instagram.com/impulseupsc/" target="_blank" class="insta"
                ><i class="fab fa-instagram"></i
                ></a>
                <a href="https://t.me/impulseupsc" target="_blank" class="telegram"
                ><i class="fab fa-telegram-plane"></i
                ></a>
                <a href="https://youtube.com/@impulsecoachinginstitute9254" target="_blank" class="email"
                ><i class="fab fa-youtube" style={{color:'red'}}></i
                ></a>
            </div>
            </div>  
            <div >

            <Navbar className='tabs-cont'>
            {/* <Container> */}
                <Nav>
                    <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(0)}>Career</button>
                    <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(1)}>Eligibility</button>
                    <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(2)}>List Of Services</button>
                    <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(3)}>Examination Structure</button>
                </Nav>
            {/* </Container> */}
            </Navbar>
                
            </div>
            
            {/* Career */}
            {tab[0] && 
                <div style={{marginTop:'30px'}}>
                    <Brochure/>
                </div>
            }

            {/* Eligibility */}
            {tab[1] && 
                <div style={{marginTop:'30px'}}>
                     <Eligibility />
                </div>
            }

            {/* List of Services */}
            {tab[2] && 
                <div style={{marginTop:'30px'}}>
                    <Listofservices />
                </div>
            }

            {/* Examination Structure */}
            {tab[3] && 
                <div style={{marginTop:'30px'}}>
                    <Examinationstructure />
                </div>
            }

            {/* Fees Structure */}
            {tab[4] && 
                <div style={{marginTop:'30px'}}>

                </div>
            }
            <section style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'5vh'}}>
                <Button style={{background:'#aa2c44', border:'1px solid #aa2c44', borderRadius:'2px'}} className='joinbutton'><a style={{color:'white', textDecoration:'none'}} href='tel:9445887823'>Enroll Now</a></Button>
            </section>
            <Footer/>
        </section>
    )
}

const Brochure = () => {
    return (
        <section>
            <Row className="brochure_content" style={{padding:'20px'}}> 
                <p className='first-content'>
                    Our scientifically designed Upgraded Full Time program is a complete
                    solution for all threee stages of Civil Services Exam. The course
                    endues students not only with the relevant konwledge but also provides
                    right kind of orientation and skills for developing administrative
                    traits. The program undertakes thorough coverage of the prescribed
                    syllabus of General Studies and the optional Subjects by well-trained
                    subject experts and professionals.
                    <br />
                    The programs is ideal for graduates who are ready to dedicate a
                    complete year for the preparation of CSE. THere will be both objective
                    and descriptive tests conducted at regular intervals, followed by
                    discussions to analyse the performance and thereby improve it.
                    <br />
                    Mock interview will be conducted by serving and retired government
                    officials and subject experts to give the feel of actual interview.
                    Recordings of the mock interview will be given to students for them to
                    look at their mistakes and correct it.
                </p>
            </Row>
<hr></hr>
            <Row md={2} sm={1} xs={1} className="brochure-assesment">
                <Col md="5" sm="5" xs="11" className='sub-assesment shadow rounded'>
                    <h5 className='u_heading'>Assesment - Periodic Test</h5>
                    <hr />
                    <ul>
                        <li>Daily tests     - After every class</li>
                        <li>Weekly tests    - Every Saturday</li>
                        <li>Monthly tests   - First sunday of each month</li>
                        <li>Quarterly tests - On topic covered so far</li>
                    </ul>
                </Col>
                <Col md="5" sm="5" xs="11" className='sub-assesment shadow rounded'>
                    <h5 className='u_heading'>Optionals</h5>
                    <hr />
                    <ul>
                        <li>Public administration</li>
                        <li>Political science and international relations</li>
                        <li>Geography</li>
                        <li>History</li>
                        <li>Tamil literature</li>
                        <li>Sociology</li>
                        <li>English literature</li>
                    </ul>
                </Col>
            </Row>

            <section className="brochure-fee">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="2" className='u_heading'>FEES STRUCTURE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GS + CSAT + Prelims Test Series</td>
                            <td>Rs. 60,000 (includes Periodic Tests)</td>
                        </tr>
                        <tr>
                            <td>Optional</td>
                            <td>Rs. 25,000</td>
                        </tr>
                        <tr>
                            <td>Mains Test Series</td>
                            <td>Rs. 15,000</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </section>
    )
}

export default Upsc;