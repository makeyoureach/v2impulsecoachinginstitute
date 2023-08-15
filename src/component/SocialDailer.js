import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Instagram, Link } from '@mui/icons-material';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import { Table } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SocialDailer() {
  const [dailerclick, setDailerclick] = React.useState(false);
  const [open, setOpen] = React.useState(false);


  const actions = [
    { icon: <a href='https://youtube.com/@impulsecoachinginstitute9254' target='blank' style={{color:'#616061'}}><YouTubeIcon /></a>, name: 'Youtube' },
    { icon: <Button onClick={()=>handleClickOpen('insta')} style={{color:'#616061'}}><Instagram /></Button>, name: 'Instagram' },
    { icon: <Button onClick={()=>handleClickOpen('telegram')} style={{color:'#616061'}}><TelegramIcon /></Button>, name: 'Telegram' },
  ];

  const handleClickOpen = ( social ) => {
    setOpen(true);
    if( social == 'insta' ){
      setDailerclick(true);
    }else if( social == 'telegram' ){
      setDailerclick(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: 0, right: 0 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        style={{ position: 'absolute', bottom: 18, right: 18 }}
        icon={<SpeedDialIcon/>}
        FabProps={{
            sx: {
                bgcolor: '#aa2c44',
                '&:hover': {
                  bgcolor: '#aa2c44',
                }
              }
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        { dailerclick ? <div><DialogTitle>{"Instagram Channel"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              <div>
                <div className='tabledailog'><a target='blank' href='https://www.instagram.com/impulsecoachinginstitute/' style={{textDecoration:'none', color:'#DC5D70'}}><InstagramIcon style={{color:'red'}}/> Impulse TNPSC</a></div>
                <div className='tabledailog'><a target='blank' href='https://www.instagram.com/impulseupsc/' style={{textDecoration:'none', color:'#DC5D70'}}><InstagramIcon style={{color:'red'}}/> Impulse UPSC</a></div>
                <div className='tabledailog'><a target='blank' href='https://www.instagram.com/impulsebanking/' style={{textDecoration:'none', color:'#DC5D70'}}><InstagramIcon style={{color:'red'}}/> Impulse SSC & BANKING</a></div>
              </div>
          </DialogContentText>
        </DialogContent></div> : <div><DialogTitle>{"Telegram Channel"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              <div>
                <div className='tabledailog'><a target='blank' href='https://t.me/ImpulseCoachingInstitute' style={{textDecoration:'none', color:'#195D90'}}><TelegramIcon style={{color:'#195D90'}}/> Impulse TNPSC</a></div>
                <div className='tabledailog'><a target='blank' href='https://t.me/impulseupsc' style={{textDecoration:'none', color:'#195D90'}}><TelegramIcon style={{color:'#195D90'}}/> Impulse UPSC</a></div>
                <div className='tabledailog'><a target='blank' href='https://t.me/impulsebankingssc' style={{textDecoration:'none', color:'#195D90'}}><TelegramIcon style={{color:'#195D90'}}/> Impulse SSC & BANKING</a></div>
              </div>
          </DialogContentText>
        </DialogContent></div>}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}