import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

function ReviewList({reviews}) {
    console.log(reviews);


    useEffect(() => {
    }, [reviews])
    //maybe accordions too
    return (

         <></>
        //  {reviews.map((review) => (
        //     <div>
        //         {...reviews}
        //     </div>



        //  ))}
            
            
        
    )
    
}

export default ReviewList;