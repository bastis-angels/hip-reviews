import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => {
    return(
    <div>
       <h1>ReviewList</h1>
       <ReviewListEntry reviews = {props.reviews}/>
       <br></br>
       <span>See all {props.reviews.length} reviews...</span>
    </div>)
};

export default ReviewList;
