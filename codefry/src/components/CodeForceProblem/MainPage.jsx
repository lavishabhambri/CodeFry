import React from 'react'
import "./CSS/MainPage.css";
import { useEffect } from 'react';
import FetchData from "./ProblemSets/APIs_Data.jsx";
import TagsComponent from './TagsComponent';

function MainPage() {
    return (
        <div>
            <TagsComponent />
            <FetchData />
        </div>
    )
}

export default MainPage;
