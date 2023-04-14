import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
//stars can be used for both the rating and read-only for the review

export default function Stars({rating}) {
  
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
        rating(newValue);
        setValue(newValue);

      }
        }
      />
    </Box>

    //update state from parent here
  );
}
