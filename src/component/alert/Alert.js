import React, { useState } from 'react';
import { Modal, Button, Image, Card } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';

import './Alert.css';
import { FiPhoneCall } from 'react-icons/fi';

function Alert() {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header className='alert-header'>
                            </Modal.Header>
                <Modal.Body>
                    <Card className="bg-dark text-white">
                        <Card.Img src="/v2/alert/nv3.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            
                            {/* <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        </Card.ImgOverlay>
                    </Card>
                    {/* <div className='mt-2'>Click below to join our Telegram Channel</div> */}
                </Modal.Body>
                <Modal.Footer>
                    
                    {/* <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button> */}
                    {/* <a href="https://t.me/impulseupsc" target='_blank'><Button variant="info">
                        UPSC
                    </Button></a> */}
                    {/* <a href="https://t.me/ImpulseCoachingInstitute" target='_blank'><Button variant="info">
                       Join TNPSC Channel
                    </Button></a> */}
                    {/* <a href="https://t.me/impulsebankingssc" target='_blank'><Button variant="info">
                        SSC And BANKING
                    </Button></a> */}
                    <a href="tel:9003557734" target='_blank'><Button variant="danger">
                    <FiPhoneCall/> Call
                    </Button></a>
                    <Button variant="secondary" onClick={handleClose}>
                     Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Alert
