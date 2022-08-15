import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function Loader() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: "100vh" }}>
        <CircularProgress color='success' size={100} />
      </Box>
    </>
  )
}

export default Loader