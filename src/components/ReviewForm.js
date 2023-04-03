import React from 'react';
import Button from 'react-bootstrap/Button';
import ReviewList from './ReviewList';
import Form from 'react-bootstrap/Form';
import Stars from './Stars';

export default class ReviewForm extends React.Component{
    render(){
        return(
            <div>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Stars />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Write your review:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
                </Form>
                
            <Button>Publish</Button>
            <ReviewList></ReviewList>
            </div>
        )
    }
}

/*

Write a review and then submit
    
    text input
    Save it so you can see the previous reviews

    add to a list of reviews (separate component)

*/