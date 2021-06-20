import React, {useState} from 'react';
import "../CSS/HeaderCards.css";


function handleClick(tagTitle,qestionId)
{
    console.log(tagTitle);
    console.log(qestionId);
}


function HeaderCards(props) {
    return (
        <div onClick={handleClick(props.title)} className="headerCards">
            {props.title}
        </div>
    )
}

export default HeaderCards;
