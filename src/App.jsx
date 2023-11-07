import DefaultPage from "./components/defaultPage";
import { useRef, useState } from "react";
import NewProject from "./components/newProject/NewProject";
import YourProjects from "./components/yourProjects/yourProjects";
import ProjectDetails from "./components/projectDetails/projectDetail";

let myobj;

function App() {
  let [isClicked, setIsClicked] = useState(false);
  let [arr, setArr] = useState([]);
  let [showDetails, setShowDetails] = useState(false);
  let [myArr, setData] = useState([]);
  let resetform = useRef();

  function newProject() {
    setIsClicked(true);
    setShowDetails(false);
  }

  function getDate(obj) {
    myobj = obj;
  }
  function submitHandler(event) {
    event.preventDefault();

    setArr((prv) => {
      return [...prv, myobj];
    });
    resetform.current.resetForm();
    setIsClicked(false);
  }

  function cancel() {
    setIsClicked(false);
  }
  function openProject(id) {
    setShowDetails(true);
    setIsClicked(false);

    let arrayToShow = arr.filter((proj) => proj.id === id);
    setData(...arrayToShow);
  }

  function deleteProject() {
    let projectTODelete = arr.filter((e) => e.id != myArr.id);
    setArr(projectTODelete);
    if (arr[0].title) {
      setShowDetails(null);
    }
  }

  return (
    <div className="flex flex-row bg-white h-screen">
      <YourProjects
        clickHandler={newProject}
        projects={arr}
        openProject={openProject}
      />

      {(!null || showDetails) && (
        <ProjectDetails
          myArr={myArr}
          deleteProject={deleteProject}
          showDetails={showDetails}
        />
      )}

      {isClicked && !showDetails && (
        <NewProject
          ref={resetform}
          cancel={cancel}
          submit={submitHandler}
          sendData={getDate}
        />
      )}
      {!showDetails && !isClicked && <DefaultPage clickHandler={newProject} />}
    </div>
  );
}

export default App;
