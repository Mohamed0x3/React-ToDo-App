import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
  state = {
    allTasks: [
      { title: "task 1", id: 1, done: false },
      { title: "task 2", id: 2, done: false },
      { title: "task 3", id: 3, done: false },
    ],
    value: "",
    title: "",
    counter: 3,
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="text-center mt-2">
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => {
              this.setState({ title: e.target.value, value: e.target.value });
            }}
            placeholder="New Todo"
            className="form-control mb-2 text-center"
            name="text"
          />
          <input
            type="submit"
            value="Add new task"
            className="btn btn-secondary m2-5"
          />
        </form>
        <hr />
        <h1 className="text-center">TodoList</h1>
        {this.state.allTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={this.handleDelete}
            onDone={this.handleDone}
            onEdit={this.handleEdit}
          />
        ))}

        <div className="m-3 d-flex justify-content-between">
          <button
            className="btn btn-sm btn-danger"
            style={{ padding: "3px 85px" }}
            onClick={this.handelDeleteDone}
          >
            Delete Done Tasks
          </button>
          <button
            className="btn btn-sm btn-danger"
            style={{ padding: "3px 85px" }}
            onClick={this.handleDeleteAll}
          >
            Delete All Tasks
          </button>
        </div>
      </div>
    );
  }

  handleSubmit = (e) => {
    console.log("submit called");
    e.preventDefault();
    e.preventDefault();
    const task = [this.state.title, this.state.counter + 1, false];
    // console.log(task);
    if (this.state.title === "") {
      alert("field is empty!");
      return;
    }
    this.handleAddTask(task);
    this.setState({ title: "", value: "" });
    // console.log(this.state.allTasks);
  };

  handleAddTask = (task) => {
    console.log("add task called");
    this.setState((previousState = this.state) => ({
      allTasks: [
        ...previousState.allTasks,
        { title: task[0], id: task[1], done: task[2] },
      ],
      counter: previousState.counter + 1,
    }));
  };

  handleDeleteAll = () => {
    console.log("onDeleteAll called");
    const allTasks = [];
    this.setState({ allTasks: allTasks });
  };

  handelDeleteDone = () => {
    console.log("onDeleteDone called");
    // const allTasks = this.state.allTasks.filter((c) => c.done === false);
    this.state.allTasks.forEach((task) => {
      console.log(this.state.allTasks);
      if (task.done) {
        this.handleDelete(task.id);
      }
    });
    // this.setState({ allTasks });
  };

  handleDelete = (taskId) => {
    console.log("onDelete called");
    console.log(this.state.allTasks);
    const allTasks = this.state.allTasks.filter((c) => c.id !== taskId);
    this.setState({ allTasks });
  };

  handleEdit = (taskTitle, taskId) => {
    console.log("OnEdit called");
    this.setState({ value: taskTitle, title: taskTitle });
    this.handleDelete(taskId);
  };

  handleDone = (title, id, done) => {
    console.log(
      "onDone called",
      "Not Working i can't get element index in array (-1)"
    );
    // console.log("allTasks", this.state.allTasks);
    const tasks = [...this.state.allTasks];
    // console.log("Tasks", tasks);
    const task = { title, id, done };
    // console.log("task", task);
    const index = this.state.allTasks.indexOf(task);
    // console.log(index);
    // tasks[index].done = !task.done;
    // tasks[index] = { ...task };
    // console.log("allTasks", this.state.allTasks);
    // console.log("Tasks", tasks);
  };
}

export default Tasks;
