import React, { Component } from "react";
import axios from "axios";

export default class EditTodo extends Component {
  constructor(props) {
    super(props);

    // Binding this object so as to use state object
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoDeadline = this.onChangeTodoDeadline.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: "",
      todo_deadline: "",
      todo_priority: "",
      todo_completed: false, // initially tood is not completed
    };
  }

  // Get post with backend
  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/update/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          todo_description: response.data.todo_description,
          todo_deadline: response.data.todo_deadline,
          todo_priority: response.data.todo_priority,
          todo_completed: response.data.todo_completed,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // onclick Handlers
  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value,
    });
  }

  onChangeTodoDeadline(e) {
    this.setState({
      todo_deadline: e.target.value,
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value,
    });
  }

  onChangeTodoCompleted(e) {
    this.setState({
      todo_completed: !this.state.todo_completed,
    });
  }

  onSubmit(e) {
    // Preventing the default action of browser on submitting a form
    e.preventDefault();

    // Creating updated object
    const obj = {
      todo_description: this.state.todo_description,
      todo_deadline: this.state.todo_deadline,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed,
    };
    axios
      .post(
        "http://localhost:4000/todos/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));

    // navigate user to home
    this.props.history.push("/todos/create");
  }

  render() {
    return (
      <div>
      <div
        style={{
          margin: "auto 60px",
          padding:"1%",
          width:"300px",
          backgroundColor: "#ECF0F3",
        }}
      >
        <h3 style={{ fontFamily: "Google Sans", fontSize: "4rem" }}>
          Update Todo
        </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
              required
            />
          </div>
          <div className="form-group">
            <label>Deadline: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.todo_deadline}
              onChange={this.onChangeTodoDeadline}
              pattern="\d{1,2}/\d{1,2}/\d{4}"
              required
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"} // this will be checked if priority = Low
                onChange={this.onChangeTodoPriority}
                required
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"} // this will be checked if priority = Medium
                onChange={this.onChangeTodoPriority}
                required
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"} // this will be checked if priority = High
                onChange={this.onChangeTodoPriority}
                required
              />
              <label className="form-check-label">High</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="completedCheckbox"
                name="completedCheckbox"
                onChange={this.onChangeTodoCompleted}
                checked={this.state.todo_completed}
                value={this.state.todo_completed}
              />
              <label className="form-check-label" htmlFor="completedCheckbox">
                Completed
              </label>
            </div>
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Update Todo"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
