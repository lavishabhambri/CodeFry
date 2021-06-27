import React from 'react';

function UserSolvedProblems(user) {

    const codeforceHandle = user.user.user;
    console.log(codeforceHandle);
    // const urlString = "https://codeforces.com/api/user.status?handle=" + codeforceHandle;
    // console.log(urlString);
    // fetch(urlString)
    // .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
    // .then(data => console.log(data));
    
    return (
        <div>
           {/* <h1>{myUser.user.user.CF_username} i am coder</h1> */}
        </div>
    )
}

export default UserSolvedProblems
