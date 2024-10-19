import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Slide } from 'react-awesome-reveal';

function DarkCarousel() {
  return (
    <Carousel data-bs-theme="dark" fade  style={{marginTop:'-10vh'}} >
      <Carousel.Item>
        <Card className="bg-white text-dark carouselcard">
          <Card.Img src="/v2/poster/7-min.jpg" alt="Card image" className="carouselimagess"  />
          <Card.ImgOverlay className='card_overlayimage' style={{display:'flex',justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <Card.Text className='cardtext'>
            <Card.Title className='cardtext_heading'>
              <Slide direction='up'>Unleash Your Inner Champion: Transforming Dreams into Triumphs</Slide></Card.Title>
            
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}  className='div_enrollnow'>
            <Slide direction='up'><Button className='enrollnow_front' style={{background:'#aa2c44', color:'white'}}>
            <a style={{textDecoration:'none', color:'inherit'}} href='tel:9003557734'>Enroll Now</a>
              </Button></Slide>

              </div>

              {/* <Slide className='cardtext_content'>-Impulse</Slide> */}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="bg-white text-dark carouselcard">
          <Card.Img src="/v2/poster/10-min.JPG" alt="Card image"  className="carouselimagess"  />
          <Card.ImgOverlay className='card_overlayimage' style={{display:'flex',justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <Card.Text className='cardtext'>
            <Card.Title className='cardtext_heading'><Slide direction='up'>Unleash Your Inner Champion: Transforming Dreams into Triumphs</Slide></Card.Title>
              
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} className='div_enrollnow'>
            <Slide direction='up'><Button className='enrollnow_front' style={{background:'#aa2c44', color:'white'}}>
            <a style={{textDecoration:'none', color:'inherit'}} href='tel:9003557734'>Enroll Now</a>
              </Button></Slide>
              </div>

            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkCarousel;