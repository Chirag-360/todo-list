import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {

  return (
    <>
      <div className="App">
        <Task />
        <TaskList />
      </div>
    </>
  );
}

export default App;
