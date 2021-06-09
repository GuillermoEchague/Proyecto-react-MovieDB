import React from 'react';
import "../assets/styles/components/Empty.scss";
import emptyImage from "../assets/static/images/empty.png"

const Empty = () => (
    <div className="empty">
        <img className="empty-img" src={emptyImage} alt="Empty" />
        <span className="empty-text">You don't have favorites.
        <br/>
         Go to Movies and select your favorite Movies.</span>    
    </div>
);

export default Empty;