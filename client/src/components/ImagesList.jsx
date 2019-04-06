import React from 'react';
import ImgaesListEntry from './ImagesListEntry.jsx';

class ImagesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    
    componentDidMount() {
      this.getDataFromServer();
    }
        
    getDataFromServer() {
        fetch(`/reviews/review/${this.props.user_id}/images/`) // get the reviews from the location with id of 6 as default first just for testing purposes
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
     return(
        <div>
          
        </div>)
   }
    
};

export default ImagesList;
