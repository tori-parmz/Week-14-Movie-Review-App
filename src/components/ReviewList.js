import React, { useEffect } from 'react';

function ReviewList({reviews}) {
    useEffect(() => {
        console.log(`reviews: `, reviews);
    }, [reviews])
    
    return (
        <div>{reviews}</div>
    )
}

export default ReviewList;