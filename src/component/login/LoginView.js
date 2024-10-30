import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { loginUser } from '../restapi/Api';
import { AiOutlineLogin } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const LoginView = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [inputError, setInputError] = useState({ username: false, password: false });
  const navigate = useNavigate();

  useEffect(() => {
    const cachedUser = localStorage.getItem('user');
    if (cachedUser) {
      onLogin(JSON.parse(cachedUser));
    }
  }, [onLogin]);

  const validateInputs = () => {
    const errors = {
      username: username.trim() === '',
      password: password.trim() === '',
    };
    setInputError(errors);
    return !errors.username && !errors.password;
  };

  const handleLogin = async () => {
    if (!validateInputs()) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const response = await loginUser(username, password);
      if(response.data.length > 0){
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        onLogin(response.data);
        setError('');
        let preroute = localStorage.getItem('preroute');
        if(preroute){
            navigate(preroute);
        }else{
            navigate('/home');
        }
      } else {
        setError('Invalid username or password');
      }
    } catch {
      setError('Invalid username or password');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        width: '100%',
        backgroundImage: 'url(/v2/lms/lms2.jpg)', // Ensure image path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 2,
      }}
    >
      <Fade>
        <Box 
          sx={{ 
            width: { xs: '100%', sm: 400 },
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            padding: { xs: 2, sm: 4 }, 
            borderRadius: 2, 
            boxShadow: 3, 
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom color="primary">
            Welcome Impluse
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Please enter your credentials to continue
          </Typography>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (inputError.username) setInputError((prev) => ({ ...prev, username: false }));
            }}
            error={inputError.username}
            helperText={inputError.username ? 'Username is required' : ''}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (inputError.password) setInputError((prev) => ({ ...prev, password: false }));
            }}
            error={inputError.password}
            helperText={inputError.password ? 'Password is required' : ''}
          />

          {error && <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            startIcon={<AiOutlineLogin />}
            sx={{
              mt: 2,
              py: 1,
              fontWeight: 'bold',
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#115293' },
            }}
          >
            Login
          </Button>

          <Button
            fullWidth
            variant="text"
            color="secondary"
            sx={{ mt: 1 }}
            onClick={() => alert('Forgot Password functionality here')}
          >
            Forgot Password?
          </Button>
        </Box>
      </Fade>
    </Box>
  );
};

export default LoginView;
