import React from 'react';
import "./../ProblemSets/showProblems.css"

function DisplaySolvedProblems (user) {
    return (
        <div style={{backgroundColor: '#ecf0f3'}}>
        <div id="solved-problems-container" className="solved-problems-container-class"></div>
        {console.log(user)}
        {UserSolvedProblems(user)}

        </div>
    )
}

function UserSolvedProblems(user) {
    // To handle the undefined case use &&
    const codeforceHandle= user.user && user.user.CF_username;
    // console.log(codeforceHandle);
   
    const urlString = "https://codeforces.com/api/user.status?handle=" + codeforceHandle;
    const data = fetch(urlString)
    .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
    .then(data => {return data});
    
    const printAddress = () => {
        data.then((a) => {
            const fetchedProblems= a.result;
            let html=''
            let count = 0; // used to find the no. of solved problems
            fetchedProblems.forEach((problem) => {
                console.log(problem);
                const index = problem.problem.index;
                const contestID = problem.problem.contestId;
                const verdict = problem.verdict;
                const tags = problem.problem.tags;
                const problemName = problem.problem.name;
                const rating = problem.problem.rating;
                if (verdict == "OK"){
                    count++;
                    let problemUrl="https://codeforces.com/problemset/problem/"+contestID+"/"+index;
                    
                    let htmlSegment = `<div class="card showProblems-card-class " style="border-radius:10px; border:none; >
                    <div class="card-body">

                        <h4 class="card-title problem-name-class">${problemName}</h4>
                        <p class="card-text">Rating: ${rating}</p>
                        <p class="card-text">Tags: ${tags}</p>
                        <a href="${problemUrl}" target="_blank" style="background-color: lawngreen;" class="btn view-problem-button"><span class="card-button-text">Accepted&nbsp&nbsp;<i style="color:#fff; font-size:20px" class="fas fa-check-circle"></i></span></a>
                    </div>
                    
                        </div>`;
                        html += htmlSegment;
                }
            })
            if(count==0){
                html = `<div><h1>OOPS, You have not solved any problem till now</h1></div>`
            }
            let container = document.getElementById('solved-problems-container');
            container.innerHTML = html;
            
        });
      };
    
    printAddress();
    return null;
    
}

export default DisplaySolvedProblems
