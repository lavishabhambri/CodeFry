import React from "react";
import axios from "axios";

// const HandleShow = (props)=>{
//   console.log(props);
// }

class FetchData extends React.Component {

  constructor(props) {

    super();

    this.state = {
      loading: true,
      problems: [],
      url: "https://codeforces.com/api/problemset.problems?tags=" + this.props
    };
  }

  async componentDidMount() {
    const response = await fetch(this.state.url);
    const data = await response.json();
    this.setState({ problems: data.result.problems, loading: false });
  }


  DisplayTaggedProblems = (problemName, problemRating, problemContest, problemIndex) => {
    return (
      <div>
        <div>{problemName}</div>
        <div>{problemRating}</div>
        <div>
          <button href="#">Solve</button>
          {/* <button></button> */}
        </div>
      </div>
    )
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.problems) {
      return <div>didn't get a problem</div>;
    }

    return (
      this.state.problems.map(problem => {

        return this.DisplayTaggedProblems(problem.name, problem.rating, problem.contestId, problem.index);
      })
    );
  }

}


export default FetchData;





















// async function fetchData(problemTag) {

//   try {
//     const array = await axios.get("https://codeforces.com/api/problemset.problems?tags=math");
//     // console.log(problemTag);
//     // console.log(array);
//     // console.log(array.data.result.problems);
//     const problemSet = array.data.result.problems;
//     const problems =  JSON.parse(problemSet);
//     console.log(problems);
//     {
//       problems.map(prob => {
//         const {problem} = JSON.parse(problem);
//         return DisplayTaggedProblems(problem.name, problem.rating, problem.contestId, problem.index);
//       })
//     }
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

// export {fetchData,DisplayTaggedProblems};

