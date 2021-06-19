import React, {useState} from 'react';
import "../CSS/HeaderCards.css";

function HeaderCards(props) {
    return (
        <div className="headerCards">
            {props.title}
        </div>
    )
}

export default HeaderCards;
