import { Alert, Card } from '@mui/material'
import React from 'react'


function Error() {
  return (

    <div>
      <Card sx={{ width: '494px', padding: '10px', height: '200px', marginLeft: '347px' }}>
        <Alert severity="error">Invalid IP Address </Alert>
      </Card>
    </div>
  )
}

export default Error
