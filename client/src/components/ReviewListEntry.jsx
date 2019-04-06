import React from 'react';
import ImagesList from './ImagesList.jsx';
import styled from 'styled-components'
const moment = require('moment');
moment().format();

const ReviewListEntry = (props) => {
    console.log(props);
    const renderReviews = (props) => {
        return props.reviews.map(review => {
          const name = review.name.split(' ');
          const nameAndInitial = `${name[0]} ${name[1][0]}.`; 
          return (
            <div>
              <img src ={review.avatar} alt="Smiley face" height="70" width="70"></img>
              <span><b>{nameAndInitial} </b>recommended this listing</span><span>{moment(review.updatedAt).format('MMMM Do YYYY')}</span>
              <br></br>
              <Body>{review.context}</Body>
              <ImagesList review_id = {review.review_id} />
              <Button>Helpful {review.helpful}</Button>
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
const Button = styled.button`
    color: #fff;
    background-color: #40d9ac;
    border-color: transparent;
    background-color: #40d9ac;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.42;
    border-radius: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;    
`;

const Body = styled.p`
    font-family: "Calibre", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    color: #333333;
`

export default ReviewListEntry;
 