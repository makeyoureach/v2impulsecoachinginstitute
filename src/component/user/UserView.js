import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Avatar, IconButton, Toolbar } from '@mui/material';
import { Slide } from 'react-awesome-reveal';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useNavigate } from 'react-router-dom';

const UserView = (user) => {
    const navigate = useNavigate();
    const username = user.user.username;
    const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate("/login");
    };

    const handleVideoClick = (link) => {
        navigate(link);
    };

    const cards = [
        { title: "Video Content", type: "video", locked: false, link: "/user/video" },
        { title: "Test Series", type: "pdf", locked: true, link: "/" },
        { title: "Material", type: "video", locked: true, link: "/" }
    ];

    const getIcon = (type, locked) => {
        if (locked) return <LockIcon fontSize="large" sx={{ color: 'grey.500' }} />;
        return type === "video" ? <PlayCircleOutlineIcon sx={{ fontSize: 60, color: '#aa2c44' }} /> : <PictureAsPdfIcon sx={{ fontSize: 60, color: 'text.secondary' }} />;
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', marginTop:'15vh' }}>
            {/* Header with Username and Logout */}
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 2, mt: 1, mb: 2 }}>
                <Box display="flex" alignItems="center">
                    <Avatar sx={{ bgcolor: '#aa2c44', width: 48, height: 48, mr: 2 }}>
                        {capitalizedUsername.charAt(0)}
                    </Avatar>
                    <Typography variant="h6" color="text.primary">
                        Welcome, {capitalizedUsername}
                    </Typography>
                </Box>
                <IconButton onClick={handleLogout} color="primary" aria-label="logout">
                    <ExitToAppIcon />
                </IconButton>
            </Toolbar>

            {/* Main Content */}
            <Box sx={{ flexGrow: 1, padding: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, color: 'text.primary' }}>
                    Your Learning Resources
                </Typography>

                <Grid container spacing={3}>
                    {cards.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Slide direction="up" triggerOnce cascade>
                                <Card
                                    onClick={() => !card.locked && card.type === 'video' && handleVideoClick(card.link)}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 3,
                                        backgroundColor: card.locked ? 'grey.300' : 'background.paper',
                                        cursor: card.locked ? 'not-allowed' : 'pointer',
                                        position: 'relative',
                                        boxShadow: card.locked ? 'none' : 3,
                                        '&:hover': {
                                            boxShadow: card.locked ? 'none' : 6,
                                        },
                                    }}
                                >
                                    {/* Content Icon */}
                                    <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                                        {getIcon(card.type, card.locked)}
                                    </Box>

                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h6" color={card.locked ? 'text.secondary' : 'text.primary'} gutterBottom>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {card.locked ? "Access restricted" : "Click to access"}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Slide>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default UserView;