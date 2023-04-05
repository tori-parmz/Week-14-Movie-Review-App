import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Stars() {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
     
      
     
      <Typography component="legend" className="movieText">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}
