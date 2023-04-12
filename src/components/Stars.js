import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Stars() {
  const [value, setValue] = React.useState(null);
  //handleClick = () => {setValue(value)}

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
     
      <Typography component="legend" className="movieText">Rate this movie:</Typography>
      <Rating 
      name="simple-controlled"
      value={value}
      onChange={(_event, newValue) => {
        setValue(newValue);}
        }
      />
    </Box>

    //update state from parent here
  );
}
