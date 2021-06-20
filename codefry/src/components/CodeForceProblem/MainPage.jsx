import React from 'react'
import "./CSS/MainPage.css";
import { useEffect } from 'react';
import fetchData from "./ProblemSets/APIs_Data";
import TagsComponent from './TagsComponent';

// fetchData();

function MainPage() {

    useEffect(() => {
        fetchData();
        }, []);

    return (
        <div>
            <TagsComponent />
        </div>
    )
}

export default MainPage;
