import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => {
    return(
    <div>
       <ReviewListEntry reviews = {props.reviews}/>
       <br></br>
       <span>See all {props.reviews.length} reviews...</span>
    </div>)
};

export default ReviewList;
