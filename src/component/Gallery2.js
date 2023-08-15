import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../css/Courses.module.css';

function Gallery2() {
  return (
    <div id='gallery2containerid'>
      <Container>
        <Row className='gallery2container'>
          <Col>
          <div className="container_img collage1">
  <div className="grid-container">
    
    <div className="item item1">
      <img src="/v2/front/Pi7compressed1-min.JPG?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img' alt="image" />
    </div>
    <div className="item item2">
      <img src="/v2/front/Pi7compressed2-min.JPG?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img' alt="image" />
    </div>
    <div className="item item3">
      <img src="/v2/front/Pi7compressed3-min.JPG?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img' alt="image" />
    </div>
    <div className="item item4">
      <img src="/v2/front/Pi7compressed4-min.JPG?auto=compress&cs=tinysrgb&w=600&lazy=load" className='img' alt="image" />
    </div>
    <div className="item item5">
      <img src="/v2/front/Pi7compressed5-min.JPG?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img' alt="image" />
    </div>
    <div className="item item6">
      <img src="/v2/front/Pi7compressed6-min.JPG?auto=compress&cs=tinysrgb&w=600&lazy=load" className='img' alt="image" />
    </div>
    <div className="item item7">
      <img src="/v2/front/Pi7compressed7-min.JPG?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img' alt="image" />
    </div>
  </div>
</div>
          </Col>
          <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div className={styles.title_header}>
            <h1>Our Gallery</h1>

                    {/* <span className={styles.bar}>l</span> */}
                    <h5>Galleries often curate and rotate exhibits to present new and thought-provoking content, fostering cultural enrichment and creative dialogue within a community or online space.</h5>
                </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery2
