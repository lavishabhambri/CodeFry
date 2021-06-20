import React from 'react';
import HeaderCards from "./Cards/headerCards";
import "./CSS/TagComponent.css";
import tags from "./tagsData";


function TagsComponent() {
    return (
        <div className="myTags">
            {tags.map((tag,index)=>{
                const tagTitle = tag.name;
                return <HeaderCards title={tagTitle} id={tagTitle+index} />
})}
            
        </div>
    )}


export default TagsComponent;
