import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

  
  export default class Reviews extends React.Component {

    constructor(props){
        super(props);
      this.state = {
         id: props.id,
         userName: props.userName,
         userReview: props.userReview,
         stars: props.stars,
        };
      }

    render(){
        return (
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
            <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Name: {/* {userName} */}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Rating:
                </Typography>
                <Rating name="read-only" value="5" readOnly />
                <Typography variant="body2">
                This is a review.
                </Typography>
                <br></br>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                Date
                </Typography>
            </CardContent>
            </React.Fragment>
            </Card>
            </Box>
          );

    }
    
  }