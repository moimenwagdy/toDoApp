import { useEffect, useRef, useState } from "react";
let arr;

export default function ProjectDetails({ myArr, deleteProject, showDetails }) {
  let { title, date, description } = myArr;

  let [taskArry, setTaskArray] = useState([]);

  let [del, setDel] = useState(false);

  let taskTitle = useRef();

  function deleteTask(index) {
    setDel((prv) => !prv);
    taskArry.forEach((task, i) => {
      i === index && task.key === title && taskArry.splice(i, 1);
    });
  }

  function taskHandler(event) {
    event.preventDefault();
    setTaskArray((prv) => [
      ...prv,
      { key: title, value: taskTitle.current.value },
    ]);
  }

  return (
    <div
      className={`flex flex-col space-y-14 w-1/2 m-auto mt-24 ${
        !showDetails ? "hidden" : ""
      }
      } `}>
      <div className="flex flex-col space-y-6 w-full m-auto  ">
        <div className="space-y-2">
          <div className="flex flex-row justify-between items-center ">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-black/40 mb-4"> {date}</p>
            </div>
            <button onClick={deleteProject} className="text-black/70">
              Delete
            </button>
          </div>
          <p>{description}</p>
        </div>
        <hr></hr>
        <div>
          <h2 className="text-2xl font-bold">Tasks</h2>
          <form className="space-y-6" onSubmit={taskHandler}>
            <input
              ref={taskTitle}
              type="text"
              className="bg-gray-200 me-4 ps-2 py-2 focus-visible:outline-cyan-600"
              id="tasks"
            />
            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>
      <div id="TaskResults" className="space-y-2">
        {taskArry &&
          taskArry
            .filter((task) => {
              return task.key === title;
            })
            .map((task, i) => {
              return (
                <div
                  key={Math.random()}
                  className="w-full flex justify-between items-center py-2 bg-gray-200">
                  <h4 className="ps-6">{task.value}</h4>
                  <button onClick={() => deleteTask(i)} className="pe-6">
                    Clear
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
}
