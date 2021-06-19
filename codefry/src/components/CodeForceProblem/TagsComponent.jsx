import React from 'react';
import HeaderCards from "./Cards/headerCards";
import "./CSS/TagComponent.css";
import {tags1,tags2,tags3} from "./tagsData";

function Tags1Component() {
    return (
        <div className="myTags">
            {tags1.map((tag,index)=>{
                const tagTitle = tag.name;
                return <HeaderCards title={tagTitle} id={tagTitle+index} />
})}
            
        </div>
    )
}

function Tags2Component() {
    return (
        <div className="myTags">
            {tags2.map((tag,index)=>{
                const tagTitle = tag.name;
                return <HeaderCards title={tagTitle} id={tagTitle+index} />
})}
            
        </div>
    )
}

function Tags3Component() {
    return (
        <div className="myTags">
            {tags3.map((tag,index)=>{
                const tagTitle = tag.name;
                return <HeaderCards title={tagTitle} id={tagTitle+index} />
})}
            
        </div>
    )
}


export {Tags1Component,Tags2Component,Tags3Component};
