import React from 'react';
import Header from './Header.jsx';
import ReviewList from './ReviewList.jsx';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        this.getDataFromServer = this.getDataFromServer.bind(this);
    }
    
    componentDidMount() {
      this.getDataFromServer(this.props.match.params.id);
    }
        
    getDataFromServer(id = this.props.match.params.id) {
        fetch(`/reviews/location/${id}/`) // get the reviews from the location with id of 6 as default first just for testing purposes
        .then((response) => {
          return response.json();
        })
        .then((results) => {
           this.setState({data: results})
        });
    }

    render() {
       return (   
           <Reviews>
                 <Header length = {this.state.data.length} />
                 <ReviewList reviews = {{data: this.state.data, reload: this.getDataFromServer}}/>
           </Reviews>
       )
    }
    
};

const Routing = () => {
  return(
     <div>
       <Router>
         <Route path="/listing/:id" component={App} />
       </Router>
     </div>
  )
}


const Reviews = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Routing;
