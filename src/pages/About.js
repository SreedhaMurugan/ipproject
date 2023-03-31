import Grid from '@mui/material/Grid'
import { Box, Paper, Typography } from '@mui/material';


const About = () => {

   return (
      <Grid container sx={{ padding: 2, gap: 2 }}>
         <Grid item sm={12} lg={12}>
            <Paper elevation={3} sx={{background:'#00b0ff',marginTop:'150px'}}>
               <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 3
               }}>
                  <Box >
                     <Typography sx={{ fontWeight: 'bold', fontSize: 20 }} >An IP address is a unique address that identifies a device on the internet or a local network. IP stands for "Internet Protocol," which is the set of rules governing the format of data sent via the internet or local network.</Typography>
                     IP address security threats
Cybercriminals can use various techniques to obtain your IP address. Two of the most common are social engineering and online stalking.

Attackers can use social engineering to deceive you into revealing your IP address. For example, they can find you through Skype or a similar instant messaging application, which uses IP addresses to communicate. If you chat with strangers using these apps, it is important to note that they can see your IP address. Attackers can use a Skype Resolver tool, where they can find your IP address from your username.
                  
                  
                  </Box>

               </Box>
            </Paper>
         </Grid>
        

      </Grid>
   );
}
export default About;