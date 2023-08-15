import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styles1 from '../../css/Courses.module.css';
import { Slide, Zoom, Fade, Hinge } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function Gallery() {
    return (
        <Container >
            <div className={styles1.title_header}>
                <Slide direction='up'><h1 className='galleryheading'>Our Gallery</h1></Slide>
                <span className={styles1.bar}></span>
                {/* <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4> */}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ImageList
                    sx={{
                        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                        transform: 'translateZ(0)',
                    }}
                    rowHeight={200}
                    gap={2}
                    className='gallerycon'
                >
                    {itemData.map((item, idx) => {
                        const cols = item.featured ? 2 : 1;
                        const rows = item.featured ? 2 : 1;

                        return (
                            <ImageListItem key={"/v2/poster/" + (idx + 1) + "-min.JPG"} cols={cols} rows={rows}>
                                <img
                                    {...srcset("/v2/poster/" + (idx + 1) + "-min.JPG", 250, 200, rows, cols)}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    sx={{
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
                                    title={item.title}
                                    position="top"
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'white' }}
                                            aria-label={`star ${item.title}`}
                                        >
                                            <StarBorderIcon />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>
            </div>

        </Container>

    );
}

const itemData = [
    {
        title: '',
        featured: true,
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    }, {
        title: '',
    },
];
