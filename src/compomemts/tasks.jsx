import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
  state = {
    allTasks: [
      { title: "task 1", id: 1, done: false },
      { title: "task 2", id: 2, done: false },
      { title: "task 3", id: 3, done: false },
      { title: "task 4", id: 4, done: true },
      { title: "task 5", id: 5, done: true },
    ],
    value: "",
    title: "",
    counter: 5,
    filterAll: true,
    filterDone: false,
    filterTodo: false,
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
        <div className="m-3 d-flex justify-content-between">
          <button
            className={this.getAllButtonClasses()}
            style={{ padding: "3px 70px" }}
            onClick={this.handelSeeAll}
          >
            All
          </button>
          <button
            className={this.getDoneButtonClasses()}
            style={{ padding: "3px 70px" }}
            onClick={this.handelSeeDone}
          >
            Done
          </button>
          <button
            className={this.getTodoButtonClasses()}
            style={{ padding: "3px 70px" }}
            onClick={this.handelSeeTodo}
          >
            Todo
          </button>
        </div>
        {this.state.allTasks
          .filter(
            (task) =>
              (this.state.filterDone && task.done === true) ||
              this.state.filterAll ||
              (this.state.filterTodo && task.done === false)
          )
          .map((task) => (
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

  // ******************************   Classes   **********************************
  getDoneButtonClasses() {
    let classes = "btn btn-sm btn-";
    classes += this.state.filterDone ? "primary" : "secondary";
    return classes;
  }
  getTodoButtonClasses() {
    let classes = "btn btn-sm btn-";
    classes += this.state.filterTodo ? "primary" : "secondary";
    return classes;
  }
  getAllButtonClasses() {
    let classes = "btn btn-sm btn-";
    classes += this.state.filterAll ? "primary" : "secondary";
    return classes;
  }

  // ******************************   Submit New Task   **********************************
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

  // ******************************  General Buttons   **********************************
  handleDeleteAll = () => {
    console.log("onDeleteAll called");
    const allTasks = [];
    this.setState({ allTasks: allTasks });
  };

  handelDeleteDone = () => {
    console.log("onDeleteDone called");
    console.log(this.state.allTasks);
    const allTasks = this.state.allTasks.filter((c) => c.done === false);
    this.setState({ allTasks });
  };

  // ******************************   Inline Buttons   **********************************
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
    // // console.log("allTasks", this.state.allTasks);
    // const tasks = [...this.state.allTasks];
    // console.log("Tasks", tasks);
    // const task = { title, id, done };
    // console.log("task", task);
    // const index = this.state.allTasks.indexOf(task);
    // console.log(index);
    // // tasks[index].done = !task.done;
    // // tasks[index] = { ...task };
    // // console.log("allTasks", this.state.allTasks);
    // // console.log("Tasks", tasks);
  };

  // *******************************   Filters   **********************************
  handelSeeDone = () => {
    console.log("onSeeDone called");
    this.setState({ filterDone: true, filterAll: false, filterTodo: false });
  };
  handelSeeTodo = () => {
    console.log("onSeeTodo called");
    this.setState({ filterDone: false, filterAll: false, filterTodo: true });
  };
  handelSeeAll = () => {
    console.log("onSeeAll called");
    this.setState({ filterDone: false, filterAll: true, filterTodo: false });
  };
}

export default Tasks;
