import React from 'react';

function UserSolvedProblems(myUser) {

    const urlString = "https://codeforces.com/api/user.status?handle=crazynitian"
    fetch(urlString)
    .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
    .then(data => console.log(data));

    console.log(myUser);
    
    return (
        <div>
           {/* <h1>{myUser.user.user.CF_username} i am coder</h1> */}
        </div>
    )
}

export default UserSolvedProblems
