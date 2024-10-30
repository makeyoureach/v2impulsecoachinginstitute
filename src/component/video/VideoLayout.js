import React from 'react';
import { Box, Typography, Avatar, IconButton, Toolbar } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import VideoView from './VideoView';

const ViewLayout = (user) => {
    const navigate = useNavigate();
    const username = user.user.username;
    const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate("/login");
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
            <Box>
                <VideoView/>
            </Box>
        </Box>
    );
};

export default ViewLayout;