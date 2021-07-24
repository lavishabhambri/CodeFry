import React from 'react';
import "./../ProblemSets/showProblems.css"

function DisplaySolvedProblems (user) {
    return (
        <div style={{backgroundColor: '#ecf0f3'}}>
        <h1 style={{textAlign:"center",padding:"3% 0%", fontFamily: "Google Sans", marginTop:"0px", fontSize:"4rem"}}>Solved Problems</h1>
        <div id="solved-problems-container" className="solved-problems-container-class"></div>
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
            let count = 0;  // used to find the no. of solved problems
            fetchedProblems.forEach((problem) => {
                console.log(problem);
                const index = problem.problem.index;
                const contestID = problem.problem.contestId;
                const verdict = problem.verdict;
                const tags = problem.problem.tags;
                const problemName = problem.problem.name;
                const rating = problem.problem.rating;
                if (verdict === "OK"){
                    count++;
                    let problemUrl="https://codeforces.com/problemset/problem/"+contestID+"/"+index;

                    let htmlSegment = `<div class="card showProblems-card-class " style="border-radius:10px; border:none; >
                    <div class="card-body">

                        <h4 class="card-title problem-name-class">${problemName}</h4>
                        <p class="card-text">Rating: ${rating}</p>
                        <p class="card-text" style="font-size:13px; color:grey;">Tags: ${tags}</p>
                        <a href="${problemUrl}" target="_blank" class="btn btn-success solved-view-problem-button"><span class="card-button-text">Accepted&nbsp&nbsp;<i style="color:#fff; font-size:20px" class="fas fa-check-circle"></i></span></a>
                    </div>

                        </div>`;
                        html += htmlSegment;
                }
            })

            // count = 0 can be due to 2 reasons when user has not logged in or when the
            // count of solved probelms = 0.

            if(count === 0 && !user){
                html = `<div style="margin:80px auto;">
                <h1 style="font-weight:bold; color:red;">OOPS, Error!!&nbsp;<i class="fas fa-frown" style="color:#FFC93C"></i></h1>
                <br />
                <h1> The possible reasons might be :- </h1>
                <br />
                <div>
                <h2>1. You have not logged in your account.</h2>
                <h2>2. You have not solved any problem till now.</h2>
                </div>
            </div>`
            }
            let container = document.getElementById('solved-problems-container');
            container.innerHTML = html;

        });
      };

    printAddress();
    return null;

}

export default DisplaySolvedProblems
