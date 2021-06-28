import React from 'react'
import './home.css';
import DisplayTags from "../ProblemRow"
import UserSolvedProblems from "../UserStatus/usersolvedproblems";

function home(user) {
    const cf_name = (user.user && user.user.CF_username);
    const urlString="https://codeforces.com/api/user.info?handles="+ cf_name;
    const data = fetch(urlString)
    .then(res => res.json())        // the .json() method parses the JSON response into a JS object literal
    .then(data => {return data})
    
    const printAllSolvedProblems = () => {
        data.then((a) => {
            const status = a.status;
            if(status != "FAILED"){
                <UserSolvedProblems user={user.user} />
            }
        });
    }

    return (
        <div>
            <DisplayTags />
            <printAllSolvedProblems/>
        </div>
    )
}

export default home
