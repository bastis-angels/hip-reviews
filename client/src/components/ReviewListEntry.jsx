import React from 'react';
import ImagesList from './ImagesList.jsx';
import styled from 'styled-components'
const moment = require('moment');
moment().format();

class ReviewListEntry extends React.Component {
    constructor(props) {
       super(props);
       this.updateHelpfulVote = this.updateHelpfulVote.bind(this);
    }
    updateHelpfulVote(data) {

      fetch(`/${data.loc_id}/${data.review_id}`,{
        method: "PATCH",
      }) // get the reviews from the location with id of 6 as default first just for testing purposes
      .then(() => {
         this.props.reviews.reload();
      })
    }
    renderReviews(props) {
      return this.props.reviews.data.map((review, idx) => {
        const name = review.name.split(' ');
        const nameAndInitial = `${name[0]} ${name[1][0]}.`; 
       
        return (
          <Container key = {idx}>
            <img src ={review.avatar} alt="Smiley face" height="70" width="70"></img>
            <span><b>{nameAndInitial} </b>recommended this listing</span><span>{moment(review.updatedAt).format('MMMM Do YYYY')}</span>
            <br></br>
            <Body>{review.context}</Body>
            <ImagesList props = {{  review_id: review.user_id, loc_id: review.loc_id,}} />
            <Button id = {review.user_id} onClick = {(e) => this.updateHelpfulVote({  e: e, review_id: review.user_id, loc_id: review.loc_id,})}>Helpful {review.helpful}</Button>
            <hr></hr>
          </Container>
        )
      }) 
    }

    render() {
      return(
        <div>
            {this.renderReviews(this.props)}
        </div>
     )
    }
  
} 

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

const Container = styled.div`
width: 800px;
`

export default ReviewListEntry;
 