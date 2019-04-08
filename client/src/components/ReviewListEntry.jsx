import React from 'react';
const moment = require('moment');
moment().format();

const ReviewListEntry = (props) => {

    const renderReviews = (props) => {
        return props.reviews.map(review => {
          const name = review.name.split(' ');
          const nameAndInitial = `${name[0]} ${name[1][0]}.`; 
          return (
            <div>
              <img src ={review.avatar} alt="Smiley face" height="42" width="42"></img>
              <span><b>{nameAndInitial} </b>recommended this listing</span><span>{moment(review.updatedAt).format('MMMM Do YYYY')}</span>
              <br></br>
              <p>{review.context}</p>
              <button>Helpful {review.helpful}</button>
              <hr></hr>
            </div>
          )
        })  
    }
    return(
       <div>
           {renderReviews(props)}
       </div>
    )
};

export default ReviewListEntry;
 