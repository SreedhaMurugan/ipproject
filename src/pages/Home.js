
import React, { useState } from 'react'
import { Grid, Button } from '@mui/material';
import Map_image from '../Assests/Map_image.png';
import IpAddress from '../Component/IpAddress';
import Error from '../Component/Error';
function Home() {
    const [newIp, setNewIp] = useState("");
    const [details, setDetails] = useState("");
    const [success, setsuccess] = useState(true);
    // var ip ="162.216.140.100"
    function IpTracker() {
      fetch("http://ip-api.com/json/" + newIp)
        .then(response => {
  
          if (response.ok) {
            return response.json();
          }
          else {
            throw Error("Failed to fetch Ip Address");
  
          }
  
  
        })
  
        .then(data => {
          if (data.status == "success") {
            setDetails(data);
            setsuccess(true);
  
          }
          else {
            // setError("We couldnt find...")
            setsuccess(false);
  
  
  
          }
  
  
        })
    }
  
  return (
    <div>
       <Grid className='con'>
        <img src={Map_image} alt='' className="img2" />
      </Grid>
      <Grid className='btn' >
        <input placeholder="IP Address" variant="filled" className='in' onChange={(e) => setNewIp(e.target.value)} ></input>
        <Button variant="contained"   sx={{ color: '#f5f5f5', height: '50px', width: '100px', borderRadius: 0 }} onClick={IpTracker} >IpLookup</Button>
      </Grid>
      <Grid sx={{width:"100hv",display:"flex",alignItems:"center",justifyContent:"center"}}>
      {success ? <IpAddress details={details} /> : <Error />}
      </Grid>
      
    </div>
  )
}

export default Home
