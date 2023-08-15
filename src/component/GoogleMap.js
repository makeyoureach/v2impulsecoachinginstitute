import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../css/Courses.module.css';

function GoogleMap() {
  return (
    <div className='googlemapcont'>
<Container>
    <div>
    <div className={styles.title_header}>
            <h1>Find us</h1>

                    {/* <span className={styles.bar}>l</span> */}
                    <h5>Galleries often curate and rotate exhibits to present new and thought-provoking content, fostering cultural enrichment and creative dialogue within a community or online space.</h5>
                </div>
    </div>
      <div className="responsive-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3174958580585!2d77.02089987460609!3d11.014788354752715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857a1bbefdced%3A0x128d9ea0684aa5f8!2sImpulse%20Coaching%20Institute%20for%20UPSC%2C%20TNPSC%20%26%20BANKING!5e0!3m2!1sen!2sin!4v1692033855841!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    </Container>
    </div>
    
  )
}

export default GoogleMap
