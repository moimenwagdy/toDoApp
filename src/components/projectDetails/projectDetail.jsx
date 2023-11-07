import { useRef, useState } from "react";
let arr;

export default function ProjectDetails({ myArr, deleteProject, showDetails }) {
  let [inputVal, setINputVal] = useState();
  let { title, date, description } = myArr;
  let formRef = useRef();
  let modefiedDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  let [taskArry, setTaskArray] = useState([]);

  let [del, setDel] = useState(false);
  function changeHandler(e) {
    setINputVal(e.target.value);
  }

  function deleteTask(index, identifier) {
    setDel((prv) => !prv);
    taskArry.forEach((task, i) => {
      identifier === task.iden && taskArry.splice(i, 1);
    });
  }

  function taskHandler(event) {
    event.preventDefault();
    setTaskArray((prv) => [
      ...prv,
      {
        key: title,
        value: inputVal,
        iden: Math.random().toFixed(3),
      },
    ]);
    formRef.current.value = "";
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
              <p className="text-black/40 mb-4"> {modefiedDate}</p>
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
              ref={formRef}
              onChange={changeHandler}
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
                  <button
                    onClick={() => deleteTask(i, task.iden)}
                    className="pe-6">
                    Clear
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
}
