import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState(["1", "2", "3", "4", "5"]);
  const [completed, setCompleted] = useState(0);

  return (
    <div className="App">
      <div className="box">
        <div className="top">
          <h1>TODO</h1>
        </div>
        <div className="bottom">
          <div className="heading">
            <p>Task list</p>
            <p>
              {completed}/{task.length} done
            </p>
          </div>
          <div className="list">
            {task.map((e, index) => {
              return (
                <div className="item" key={index}>
                  <span>-</span>
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      if (e.target.checked) {
                        setCompleted(completed + 1);
                        const ele = document.getElementById(`item-${index}`);
                        ele.style.textDecoration = "line-through";
                      } else {
                        setCompleted(completed - 1);
                        const ele = document.getElementById(`item-${index}`);
                        ele.style.textDecoration = "none";
                      }
                    }}
                  ></input>{" "}
                  <p id={`item-${index}`}>{e}</p>
                </div>
              );
            })}
          </div>
          <button>
            <span>+</span>Add task
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
