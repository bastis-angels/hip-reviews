import React from 'react';

const Header = (props) => {
    return(
      <div>
        <span className = "review-count"><b>{props.length} Written reviews</b>/ 97 Written reviews at other listing  </span>   <span>recent/<b>best</b></span>
      </div>
    )
};

export default Header;