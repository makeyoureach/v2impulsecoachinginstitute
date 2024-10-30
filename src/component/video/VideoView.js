import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Reveal } from 'react-awesome-reveal';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define videos grouped by categories
const videoGroups = [
  {
    title: 'Course Content',
    videos: [
      {
        title: 'FREE TAMIL LIVE TEST-31',
        url: 'https://www.youtube.com/embed/4btPvEe1b0k?si=_a0yrzBumLt_P_fo',
      },
      {
        title: 'FREE TAMIL LIVE TEST-32',
        url: 'https://www.youtube.com/embed/yOBek_CkNWg?si=4bKkex5F75iqB18Z',
      },
      {
        title: 'FREE TAMIL LIVE TEST-33',
        url: 'https://www.youtube.com/embed/yOBek_CkNWg?si=4bKkex5F75iqB18Z',
      },
      {
        title: 'FREE TAMIL LIVE TEST-34',
        url: 'https://www.youtube.com/embed/yOBek_CkNWg?si=4bKkex5F75iqB18Z',
      },
      {
        title: 'FREE TAMIL LIVE TEST-35',
        url: 'https://www.youtube.com/embed/yOBek_CkNWg?si=4bKkex5F75iqB18Z',
      },
      {
        title: 'FREE TAMIL LIVE TEST-36',
        url: 'https://www.youtube.com/embed/yOBek_CkNWg?si=4bKkex5F75iqB18Z',
      },
      {
        title: 'FREE TAMIL LIVE TEST-37',
        url: 'https://www.youtube.com/embed/yOBek_CkNWg?si=4bKkex5F75iqB18Z',
      },
      {
        title: 'FREE TAMIL LIVE TEST-38',
        url: 'https://www.youtube.com/embed/yOBek_CkNWg?si=4bKkex5F75iqB18Z',
      },
      {
        title: 'FREE TAMIL LIVE TEST-39',
        url: 'https://www.youtube.com/embed/yOBek_CkNWg?si=4bKkex5F75iqB18Z',
      },
      {
        title: 'FREE TAMIL LIVE TEST-40',
        url: 'https://www.youtube.com/embed/yOBek_CkNWg?si=4bKkex5F75iqB18Z',
      }
    ],
  }
//   {
//     title: 'Advanced React',
//     videos: [
//       {
//         title: 'Video 3: Component Lifecycle',
//         url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
//       },
//       {
//         title: 'Video 4: Context API',
//         url: 'https://www.youtube.com/embed/2yI2g1F4eXs',
//       },
//     ],
//   },
  // Add more groups as needed
];

const VideoView = () => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(videoGroups[0].videos[0].url);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleVideoSelect = (url) => {
    setSelectedVideoUrl(url);
  };

  const handleNext = () => {
    const currentGroup = videoGroups.find(group => group.videos.some(video => video.url === selectedVideoUrl));
    const currentIndex = currentGroup.videos.findIndex(video => video.url === selectedVideoUrl);
    if (currentIndex < currentGroup.videos.length - 1) {
      setSelectedVideoUrl(currentGroup.videos[currentIndex + 1].url);
    }
  };

  const handlePrevious = () => {
    const currentGroup = videoGroups.find(group => group.videos.some(video => video.url === selectedVideoUrl));
    const currentIndex = currentGroup.videos.findIndex(video => video.url === selectedVideoUrl);
    if (currentIndex > 0) {
      setSelectedVideoUrl(currentGroup.videos[currentIndex - 1].url);
    }
  };

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2} >
        {isMobile ? (
          <>
            <Grid item xs={12}>
              <Paper>
                <Typography variant="h6" style={{ padding: '16px' }}>
                  Now Playing
                </Typography>
                <iframe
                  width="100%"
                  height="315"
                  src={selectedVideoUrl}
                  title="YouTube Video Player"
                  frameBorder="0"
                  allowFullScreen
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
                  <Button
                    variant="contained"
                    onClick={handlePrevious}
                    disabled={selectedVideoUrl === videoGroups.find(group => group.videos.some(video => video.url === selectedVideoUrl)).videos[0].url}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={selectedVideoUrl === videoGroups.find(group => group.videos.some(video => video.url === selectedVideoUrl)).videos[videoGroups.find(group => group.videos.some(video => video.url === selectedVideoUrl)).videos.length - 1].url}
                  >
                    Next
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <Typography variant="h6" style={{ padding: '16px' }}>
                  Video List
                </Typography>
                {videoGroups.map((group, groupIndex) => (
                  <Reveal key={groupIndex} effect="fadeIn">
                    <Accordion defaultExpanded={groupIndex === 0}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{group.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={1}>
                          {group.videos.map((video, videoIndex) => (
                            <Grid item xs={12} key={videoIndex}>
                              <Button
                                fullWidth
                                variant="outlined"
                                onClick={() => handleVideoSelect(video.url)}
                                style={{ marginBottom: '8px' }}
                              >
                                {video.title}
                              </Button>
                            </Grid>
                          ))}
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  </Reveal>
                ))}
              </Paper>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={4} >
              <Paper>
                <Typography variant="h6" style={{ padding: '16px' }}>
                  Video List
                </Typography>
                {videoGroups.map((group, groupIndex) => (
                  <Reveal key={groupIndex} effect="fadeIn">
                    <Accordion defaultExpanded={groupIndex === 0}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{group.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {group.videos.map((video, videoIndex) => (
                          <Button
                            key={videoIndex}
                            onClick={() => handleVideoSelect(video.url)}
                            style={{ display: 'block', marginBottom: '8px' }}
                          >
                            {video.title}
                          </Button>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  </Reveal>
                ))}
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} >
              <Paper>
                <Typography variant="h6" style={{ padding: '16px' }}>
                  Now Playing
                </Typography>
                <iframe
                  width="100%"
                  height="500"
                  src={selectedVideoUrl}
                  title="YouTube Video Player"
                  frameBorder="0"
                  allowFullScreen
                />
              </Paper>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default VideoView;
