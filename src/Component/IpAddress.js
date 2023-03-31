import { Grid, Card, InputLabel } from "@mui/material";



const IpAddress = ({ details }) => {
  console.log(details, "this is......")

  return (
    <>
      {details?.query && <Card sx={{ width: '494px', padding: '10px', height: '200px',  }}>

        <Grid  >
          <Grid container >
            <InputLabel sx={{ marginLeft: '20px', color: 'black' }}>IP Address </InputLabel>

            <InputLabel sx={{ marginLeft: '87px', color: 'black' }}> {details.query}</InputLabel></Grid>
          <Grid container >
            <InputLabel sx={{ marginLeft: '20px', color: 'black' }} >City</InputLabel>
            <InputLabel sx={{ marginLeft: '138px', color: 'black' }}>{details.city}</InputLabel></Grid>

          <Grid container>
            <InputLabel sx={{ marginLeft: '20px', color: 'black' }}>Country</InputLabel>
            <InputLabel sx={{ marginLeft: '110px', color: 'black' }}>{details.country}</InputLabel></Grid>

          <Grid container>
            <InputLabel sx={{ marginLeft: '20px', color: 'black' }}>Country Code</InputLabel>
            <InputLabel sx={{ marginLeft: '70px', color: 'black' }}>{details.countryCode}</InputLabel> </Grid>
          <Grid container>
            <InputLabel sx={{ marginLeft: '20px', color: 'black' }}>Region</InputLabel>
            <InputLabel sx={{ marginLeft: '120px', color: 'black' }}>{details.region} </InputLabel></Grid>
          <Grid container>
            <InputLabel sx={{ marginLeft: '20px', color: 'black' }}>Internet Provider</InputLabel>
            <InputLabel sx={{ marginLeft: '50px', color: 'black' }}>{details.isp} </InputLabel></Grid>
          <Grid container>
            <InputLabel sx={{ marginLeft: '20px', color: 'black' }}>Latitude</InputLabel>
            <InputLabel sx={{ marginLeft: '110px', color: 'black' }}>{details.lat}</InputLabel></Grid>
          <Grid container>
            <InputLabel sx={{ marginLeft: '20px', color: 'black' }}>Longitude</InputLabel>
            <InputLabel sx={{ marginLeft: '100px', color: 'black' }}> {details.lon}</InputLabel></Grid>


        </Grid>
      </Card>
      }
    </>
  );
}


export default IpAddress;
