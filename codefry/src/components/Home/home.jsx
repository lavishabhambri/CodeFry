import React from 'react'
import './home.css';
import DisplayTags from "../ProblemRow"
import UserSolvedProblems from "../UserStatus/usersolvedproblems";

function home(props,user) {
    return (
        <div>
        <DisplayTags />

        {<UserSolvedProblems myUser={user} />}
        </div>
    )
}

export default home
