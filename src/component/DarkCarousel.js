import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Slide } from 'react-awesome-reveal';

function DarkCarousel() {
  // Array of card data
  const carouselData = [
    {
      imgSrc: '/v2/newimages/n3.jpg',
      title: 'Unleash Your Inner Champion: Transforming Dreams into Triumphs',
      buttonLink: 'tel:9003557734',
      buttonText: 'Enroll Now',
    },
    {
      imgSrc: '/v2/newimages/n1.jpg',
      title: 'Achieve Greatness with Every Step',
      buttonLink: 'tel:9003557734',
      buttonText: 'Enroll Now',
    },
    {
      imgSrc: '/v2/newimages/n5.jpg',
      title: 'Unleash Your Inner Champion: Transforming Dreams into Triumphs',
      buttonLink: 'tel:9003557734',
      buttonText: 'Enroll Now',
    },
    {
      imgSrc: '/v2/newimages/n2.jpg',
      title: 'Achieve Greatness with Every Step',
      buttonLink: 'tel:9003557734',
      buttonText: 'Enroll Now',
    },
    {
      imgSrc: '/v2/newimages/n6.jpg',
      title: 'Unleash Your Inner Champion: Transforming Dreams into Triumphs',
      buttonLink: 'tel:9003557734',
      buttonText: 'Enroll Now',
    }
    // Add more items as needed
  ];

  return (
    <Carousel data-bs-theme="dark" fade style={{ marginTop: '-10vh' }}>
      {carouselData.map((item, index) => (
        <Carousel.Item key={index}>
          <Card className="bg-white text-dark carouselcard">
            <Card.Img src={item.imgSrc} alt={`Card image ${index + 1}`} className="carouselimagess" />
            <Card.ImgOverlay
              className="card_overlayimage"
              style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
            >
              <Card.Text className="cardtext">
                <Card.Title className="cardtext_heading">
                  <Slide direction="up">{item.title}</Slide>
                </Card.Title>
                <div
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  className="div_enrollnow"
                >
                  <Slide direction="up">
                    <Button className="enrollnow_front" style={{ background: '#aa2c44', color: 'white' }}>
                      <a style={{ textDecoration: 'none', color: 'inherit' }} href={item.buttonLink}>
                        {item.buttonText}
                      </a>
                    </Button>
                  </Slide>
                </div>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DarkCarousel;
