import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import ReviewList from './ReviewList';
import Form from 'react-bootstrap/Form';
import Stars from './Stars';

export function ReviewForm () {
    const [newReview, setNewReview] = useState("");
    const [reviews, setReviews] = useState([]);

    const submitForm = () => {
       setReviews(reviews => [...reviews, newReview]);
       setNewReview("");
    }
//newReview
    return (
        <div>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Stars />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="movieText">Name:</Form.Label>
                <Form.Control type="text" placeholder="Name" />
                <Form.Label className="movieText">Write your review:</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                />
            <Button
            onClick={() => submitForm()}
            >
                Publish</Button>
            </Form.Group>
        </Form>       
        <br></br>
        <ReviewList reviews={reviews}></ReviewList>
            </div>

    )

}

export default ReviewForm;
    

/*

Write a review and then submit
    
    text input
    Save it so you can see the previous reviews

    add to a list of reviews (separate component)

*/