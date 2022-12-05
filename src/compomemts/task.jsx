import React, { Component } from "react";

class Task extends Component {
  //   state = {
  //     title: "Task sample",
  //     id: 1,
  //     done: false,
  //   };
  state = {
    title: this.props.task.title,
    id: this.props.task.id,
    done: this.props.task.done,
  };

  render() {
    let editB;
    if (!this.state.done)
      editB = (
        <button
          className="btn btn-warning btn-sm m-1"
          onClick={() => this.props.onEdit(this.state.title, this.state.id)}
        >
          Edit
        </button>
      );
    else editB = "";
    return (
      <div className={this.getBadgeClasses()}>
        <div className="ml-2 align-self-center mr-auto">{this.state.title}</div>
        <input
          type="checkbox"
          className="m-1"
          defaultChecked={this.state.done}
          onClick={() => {
            this.props.onDone(this.state.title, this.state.id, this.state.done);
            this.setState({ done: !this.state.done });
            console.log(this.state);
          }}
        />
        {editB}
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => this.props.onDelete(this.state.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "border rounded m-3 d-flex border-secondary ";
    classes += this.state.done ? "bg-success" : "bg-warning";
    return classes;
  }
}

export default Task;
