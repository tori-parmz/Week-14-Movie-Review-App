import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Reviews from './Reviews';
import Stars from './Stars';

export function ReviewForm () {
    const [newReview, setNewReview] = useState("");
    const [newName, setNewName] = useState("");
    const [reviews, setReviews] = useState([]);
    const [value, setValue] = useState(null);
    

    const submitForm = () => {
        var newReviewObj = {
            userName: newName,
            userReview: newReview,
            stars: value,
        };

        setReviews([...reviews, newReviewObj]);
        setNewReview("");
        setNewName("");
        setValue(null);
        
    }

    function handleRating(newValue) {
        setValue(newValue);
    }

//newReview
    return (

        <div>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Stars 
                rating={handleRating}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="movieText">Name:</Form.Label>
                <Form.Control type="text" placeholder="Name"
                onChange={(e) => setNewName(e.target.value)}
        
                />
                <Form.Label className="movieText">Write your review:</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                />
            <Button variant="primary" type="reset"
            onClick={() => submitForm()}
            >
                Publish</Button>
            </Form.Group>
        </Form>       
        <br></br>
        <div id="renderedReviews">
        {reviews.map((review, index) => {
            return <Reviews key={index} review={review} />
        })}

        {/* <Reviews reviews={reviews}/> */}

        </div>
            </div>

    )

}

export default ReviewForm;
