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
            if(status !== "FAILED"){
                <UserSolvedProblems user={user.user} />
            }
        });
    }

    return (
        <div style={{backgroundColor:"#ECF0F3"}}>
            {/* <h1 style={{marginTop:"0px", padding:"2% 28px 0%", fontFamily: "Google Sans",fontSize:"4rem"}}>Problem Tags</h1> */}
            <DisplayTags />
            <printAllSolvedProblems/>
        </div>
    )
}

export default home
