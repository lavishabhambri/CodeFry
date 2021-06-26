import React, { useState } from 'react';
import "../CSS/HeaderCards.css";
import FetchData from "../ProblemSets/APIs_Data.jsx";



const HeaderCards = (props) => {
    return (
        <div onClick={() => new FetchData(props.title)} className="headerCards">
            {props.title}
        </div>
    )
}

export default HeaderCards;
