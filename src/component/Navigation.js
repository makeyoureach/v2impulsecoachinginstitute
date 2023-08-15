import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {BiSolidPhoneCall} from 'react-icons/bi'
import { Bounce } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';
import {FiPhoneCall} from 'react-icons/fi';

const pages = ['Home', 'Explore Course', 'Testseries'];
const settings = ['Tnpsc', 'Upsc', 'Ssc and banking', 'Others'];
const phone = ['7397556722', '9445887823', '9445887823', '7397556722'];
const anchor = ['home', 'explorecourse', 'testseries' ];

function Navigation(props) {

    
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);
  let scrollvalue = 0;
  if(props.scroll==true){
    scrollvalue = 200;
  }
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= scrollvalue) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="fixed" id={navbar ? 'navcontainer' : 'navcontainer2'}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <img src='/logo.png' width={140} alt='logo'/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon id ={navbar ? 'menuicon' : 'menuicon2'}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, idx) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">               <NavLink to={"/"+anchor[idx]} style={{textDecoration: 'none', color:'inherit' }}  >{page}</NavLink>
</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src='/logo.png' width={140} alt='logo'/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', display:'flex', justifyContent:'center', alignItems:'center' } }}>
            {pages.map((page,idx) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                id={navbar ? 'navbarlink' : 'navbarlink2'}
              >
               <NavLink to={"/"+anchor[idx]} style={{textDecoration: 'none', color:'inherit' }}  >{page}</NavLink>
                
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Enquiry Call">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Typography textAlign="center" className={navbar ? 'enquirycall' : 'enquirycall2'} style={{display:'flex'}}>ENQUIRY <span className='bounce'><Bounce duration="500" ><BiSolidPhoneCall style={{marginLeft:'2px'}}/></Bounce></span></Typography>

              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, idx) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                  <a style={{textDecoration:'none', color:'inherit'}} href={'tel:'+phone[idx]}> <FiPhoneCall/> {setting}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
