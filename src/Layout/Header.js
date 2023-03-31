import * as React from 'react';
import Box from '@mui/material/Box';
import Location_log from '../Assests/Location_log.png';
import '../App.css';
import { Button, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom"





export default function Header() {

  const navigate = useNavigate();
  return (
    <Box  >


      <Grid container justifyContent="space-between" className="header">
        <Grid xs={2} display="flex" flexDirection="row" alignItems="center" marginLeft="50px">
          <img src={Location_log} alt='' className="im" />
          <Typography sx={{ color: '#f5f5f5', fontSize: '21.6px' }}>IP Tracker</Typography>
        </Grid>
        <Grid container
          direction="row"
          alignItems="center"
          sx={{ color: '#f5f5f5', justifyContent: "flex-end" }}
          xs={6}
        >
          <Grid xs={2} sx={{ borderRight: 1 }}><Button onClick={() => navigate("/")} sx={{ color: '#f5f5f5', fontSize: '14px' }}>Home</Button></Grid>
          <Grid xs={2} sx={{ borderRight: 1 }}><Button sx={{ color: '#f5f5f5', fontSize: '14px' }}>Docs</Button></Grid>
          <Grid xs={2} sx={{ borderRight: 1 }}><Button sx={{ color: '#f5f5f5', fontSize: '14px' }}>Contact</Button></Grid>
          <Grid xs={2} sx={{ borderRight: 1 }}> <Button onClick={() => navigate("/first")} sx={{ color: '#f5f5f5', fontSize: '14px' }}>About</Button></Grid>
        </Grid>
      </Grid>







    </Box>
  );
}
