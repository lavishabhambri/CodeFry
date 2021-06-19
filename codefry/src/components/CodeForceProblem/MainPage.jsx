import React from 'react'
import "./CSS/MainPage.css";
import { useEffect } from 'react';
import fetchData from "./ProblemSets/APIs_Data";
import {Tags1Component,Tags2Component,Tags3Component} from './TagsComponent';

// fetchData();

function MainPage() {

    useEffect(() => {
        fetchData();
        }, []);

    return (
        <div>
            <Tags1Component />
            <Tags2Component />
            <Tags3Component />
        </div>
    )
}

export default MainPage;
