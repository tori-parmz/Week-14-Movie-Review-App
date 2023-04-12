import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

function ReviewList({reviews}) {
    console.log(reviews);


    useEffect(() => {
    }, [reviews])
    
    return (
       
        <>
         {/* <div className='reviewList'>
         {reviews.map((review) => {
            return <Card>
                <Card.Body>
                    <Card.Text {...review}>
                    
                    </Card.Text>

                </Card.Body>

            </Card>})}
            
        </div> */}
        </>
    )
}

export default ReviewList;