import React from 'react';
import Card from 'react-bootstrap/Card';
import MovieList from './MovieList';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

export default class Movie extends React.Component{
//constructor for movie data
   constructor(props){
     super(props);
   this.state = {
      id: props.id,
      title: props.title,
      releaseDate: props.releaseDate,
      description: props.description,
      genre: props.genre,
      director: props.director,
      runTime: props.runTime,
      ageRating: props.ageRating,
      image:props.image
     };
   }

   

    render(){
        return(
            <Card className='movieCard' style={{ width: '18rem' }}>
      <Card.Img className="moviePoster" variant="top" src={this.state.image} />
      <Card.Body>
        <Card.Text className="movieTitle">{this.state.title}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
        Dir. {this.state.director}

        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
        {this.state.releaseDate}
          {this.state.runTime}

        </Card.Subtitle>
        <Card.Title className="movieText">
          
          {this.state.description}

        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{this.state.genre}{this.state.ageRating}
        </Card.Subtitle>
        <ReviewForm />
        <ReviewList />
      </Card.Body>
    </Card>

        );
    }

}