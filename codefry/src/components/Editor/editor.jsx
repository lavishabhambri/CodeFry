import React, { Component } from "react";
import "./editor.css";
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config()

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem('input')||``,
      output: ``,
      language_id:localStorage.getItem('language_Id')|| 2,
      user_input: ``,
    };
  }
  input = (event) => {

    event.preventDefault();

    this.setState({ input: event.target.value });
    localStorage.setItem('input', event.target.value)

  };
  userInput = (event) => {
    event.preventDefault();
    this.setState({ user_input: event.target.value });
  };
  language = (event) => {

    event.preventDefault();

    this.setState({ language_id: event.target.value });
    localStorage.setItem('language_Id',event.target.value)

  };

  submit = async (e) => {
    e.preventDefault();

    let outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.REACT_APP_EDITOR_API_KEY}`, // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: this.state.input,
          stdin: this.state.user_input,
          language_id: this.state.language_id,
        }),
      }
    );
    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();

    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };

    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_EDITOR_API_KEY}`, // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/

            "content-type": "application/json",
          },
        });

        jsonGetSolution = await getSolution.json();
      }
    }
    if (jsonGetSolution.stdout) {
      const output = atob(jsonGetSolution.stdout);

      outputText.innerHTML = "";

      outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);

      outputText.innerHTML = "";

      outputText.innerHTML += `\n Error :${error}`;
    } else {
      const compilation_error = atob(jsonGetSolution.compile_output);

      outputText.innerHTML = "";

      outputText.innerHTML += `\n Error :${compilation_error}`;
    }
  };
  render() {

    return (
      <div className="container-fluid editor-page">
        <div id="container">
          <div className="left">
          <label htmlFor="solution "></label>
                  <textarea
                    required
                    name="solution"
                    id="source"
                    onChange={this.input}
                    className=" source"
                    value={this.state.input}
                  ></textarea>
          </div>

          <div className="right">
            <div className="upper">
                  <select
                    value={this.state.language_id}
                    onChange={this.language}
                    id="tags"
                    className="form-control form-inline mb-2 language-selector"
                    style={{width:"95%", marginLeft:"8px", marginTop:"10px"}}
                  >
                    <option value="54">C++</option>
                    <option value="50">C</option>
                    <option value="62">Java</option>
                    <option value="71">Python</option>
                  </select>
                  <button
                    type="submit"
                    className="btn btn-warning submit-button "
                    onClick={this.submit}
                    style={{marginBottom:"8px", width:"95%",color:"#000"}}
                  >
                    <i className="fas fa-cog fa-fw"></i> Submit
                  </button>
            </div>

            <div className="lower">

              <textarea id="input" onChange={this.userInput} placeholder="Enter input">
              </textarea>
              <div>
                <textarea id="output" disabled></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
