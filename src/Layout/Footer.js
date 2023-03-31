import { AppBar, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = ()=> {
    return(
        <AppBar position="static">
            <Box sx={{padding:'20px',background:'-webkit-linear-gradient(-45deg,rgba(42,77,252,1) 0,rgba(10,255,206,1) 100%)'}}>
                <Grid container>
                  
                        <Grid item sm={12} lg={8}>
                            <Box mt={'1rem'}>
                                <Typography sx={{
                                    fontSize:20,
                                    fontWeight:'bold'
                                    }}>Ip Tracker.org
                                </Typography>
                            </Box>
                            <Box mt={'1rem'}>
                                <Link underline='none' sx={{color:'white'}}>Documents</Link>{' . '}
                                <Link underline='none' sx={{color:'white'}}>Ip Search</Link>{' . '}
                                <Link underline='none' sx={{color:'white'}}>Contact</Link>{' . '}
                                <Link underline='none' sx={{color:'white'}}>About</Link>{' . '}
                                <Link underline='none' sx={{color:'white'}}>Start page</Link>
                            </Box>
                            <Box mt={'1rem'}>
                                <Typography color={'#424242'}>©2023 Ip Tracker.Org | All rights reserved.</Typography>
                            </Box>
                        </Grid>
                    <Grid item xs={12} sm={12} lg={4} sx={{
                        display:'flex',
                        justifyContent:'flex-end'
                    }}>
                        <Grid sx={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            
                            <Box mt={1}>
                                <TwitterIcon />
                                <FacebookIcon sx={{ml:2}} />
                            </Box>
                        </Grid>
                    </Grid>
                  
                </Grid>                
            </Box>
        </AppBar>
    );
}
export default Footer;