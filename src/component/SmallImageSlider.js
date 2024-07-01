import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '1',
    imgPath:
      '/slide/n1.jpg',
  },
  {
    label: '2',
    imgPath:
      '/slide/n2.jpg',
  },
  {
    label: '3',
    imgPath:
      '/slide/n3.jpg',
  },
  {
    label: '4',
    imgPath:
      '/slide/n4.jpg',
  },
  {
    label: '5',
    imgPath:
      '/slide/n5.jpg',
  },
  {
    label: '6',
    imgPath:
      '/slide/n6.jpg',
  },
  {
    label: '7',
    imgPath:
      '/slide/n7.jpg',
  },
  {
    label: '8',
    imgPath:
      '/slide/p1.jpeg',
  },
  {
    label: '9',
    imgPath:
      '/slide/p2.jpeg',
  },
  {
    label: '10',
    imgPath:
      '/slide/s1.jpg',
  },
  {
    label: '11',
    imgPath:
      '/slide/s2.jpg',
  },
  {
    label: '12',
    imgPath:
      '/slide/s3.jpg',
  },
];

function SmallImageSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }} id="slidercontainorcon">
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography></Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 320,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{color:'#aa2c44'}}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}  style={{color:'#aa2c44'}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Previous
          </Button>
        }
        style={{color:'#aa2c44'}}
      />
    </Box>
  );
}

export default SmallImageSlider;
