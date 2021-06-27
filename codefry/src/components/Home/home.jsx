import React from 'react'
import './home.css';
import DisplayTags from "../ProblemRow"
import UserSolvedProblems from "../UserStatus/usersolvedproblems";

function home(user) {
    return (
        <div>
        <DisplayTags />
        {<UserSolvedProblems user={user.user} />}
        </div>
    )
}

export default home
