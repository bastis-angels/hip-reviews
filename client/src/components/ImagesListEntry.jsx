import React from 'react';
const moment = require('moment');
moment().format();

const ImagesListEntry = (props) => {

    const renderImages = (props) => {
           return props.ImageList.map((image) => {
               return( 
                   <span> <img src = {image.image_url} alt="Smiley face" height="70" width="70"></img></span>
               )
           })
    }

    return(
        <div>{renderImages(props)}</div>
    )
};

export default ImagesListEntry;
 