import React from "react"
import tags from "./tagsData"
import "./CSS/TagComponent.css"
import $ from "jquery"
import "./ProblemSets/showProblems.css"
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function DisplayTags () {
    return (
        <div>
        <div className="tags-style-class">
            {tags.map((tag, index) => {
                const tagTitle = tag.name;
                return <div onClick={() => {handleClickOnTags(tagTitle)}} className="inner-tags">{tagTitle}</div>
            })}
        </div>
        <div id="problems-container" className="problems-container-class"></div>
        </div>
    )
}

function handleClickOnTags(tagName){
    // console.log(tagName);
    const urlString = "https://codeforces.com/api/problemset.problems?tags=" + tagName
    // console.log(urlString);
    $.ajax({
        url: urlString,
        success: (searchResults) => {
            console.log("Fetched data successfully")

            const results = searchResults.result.problems;
            // container.innerHTML = 
            
            let html=''
            results.forEach((problem) => {
                // let problemUrl="https://codeforces.com/problemset/problem/"+problem.contestId+"/"+problem.index;
                // let htmlSegment = `<div class="problem-card">

                // <h4>${problem.name}</h4>
                // <div>${problem.rating}</div>
                
                // <a href="${problemUrl}" class="btn btn-info view-problem-button">View</a>
                
              
                // </div>`;
                // html += htmlSegment;

                let problemUrl="https://codeforces.com/problemset/problem/"+problem.contestId+"/"+problem.index;
                let htmlSegment = `<div class="card card-class">
            <div class="card-body">
                <h4 class="card-title problem-name-class">${problem.name}</h4>
                <p class="card-text">Rating: ${problem.rating}</p>
                
                <a href="${problemUrl}" class="btn btn-info view-problem-button"><span class="card-button-text">View</span></a>
            
            </div>
              
                </div>`;
                html += htmlSegment;
          })
          let container = document.getElementById('problems-container');
            container.innerHTML = html;
  
        },
        error: (xhr, status, err) => {
          console.error("Failed to fetch data")
        }
      })
}

// <a class="button" href="${problemUrl}">View</a>
{/* <button type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='${problemUrl}';
      }}
>View</button> */}



export default DisplayTags
