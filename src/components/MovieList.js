import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Movies from './Movies';

export default class MovieList extends React.Component{
//constructor for movie data
   constructor(props){
     super(props);
   this.state = {
      id: props.id,
      title: props.title,
      image: props.image,
      synopsis: props.synopsis,
      rating: props.rating
     };
   }

    render(){
      console.log(Movies);
        return(
            <Card className='movieCard' style={{ width: '18rem' }}>
      <Card.Img className="moviePoster" variant="top" src={this.state.image} height="200px" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

        );
    }

}