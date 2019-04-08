import React from 'react';
import Header from './Header.jsx';
import ReviewList from './ReviewList.jsx';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [],
        }
    }
    
    componentDidMount() {
      this.getDataFromServer();
    }
        
    getDataFromServer() {
        fetch('/reviews/location/6/') // get the reviews from the location with id of 6 as default first just for testing purposes
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
           this.setState({data: myJson}, () => {
               console.log(this.state.data);
           })
        });
      }
    render() {
       return (
           <div>
               <Header />
               <ReviewList reviews = {this.state.data}/>
           </div>
       )
    }
    
};

export default App;
