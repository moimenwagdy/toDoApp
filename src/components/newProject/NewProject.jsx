import { forwardRef, useImperativeHandle, useRef, useState } from "react";

let NewProject = forwardRef(function NewProject(
  { submit, sendData, cancel },
  ref
) {
  let [projectDetail, setProjectDetails] = useState({});
  let reset = useRef();

  useImperativeHandle(ref, () => ({
    resetForm: () => {
      reset.current.reset();
    },
  }));
  function changeHandler(key, value) {
    setProjectDetails((prv) => {
      return { ...prv, [key]: value, id: Math.random().toFixed(3) };
    });
  }

  sendData(projectDetail);

  return (
    <form className="m-auto h-1/2 w-[50%]" onSubmit={submit} ref={reset}>
      <div className="buttonsContainer flex felx-row justify-end space-x-2">
        <button
          onClick={cancel}
          type="reset"
          className=" bg-white/80 px-6 py-2 text-gray-700 rounded-lg hover:bg-gray-600 hover:text-white/80">
          cancel
        </button>
        <button
          type="submit"
          className=" bg-gray-900 px-6 py-2 text-white rounded-lg hover:bg-white/80 hover:text-gray-700">
          save
        </button>
      </div>
      <div className="inputsContainer">
        <div className="flex flex-col">
          <label htmlFor="title">TITLE</label>
          <input
            required
            id="title"
            onChange={(e) => {
              changeHandler("title", e.target.value);
            }}
            className="bg-gray-300 focus-visible:outline-none "
            type="text"></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">DESCRIPTION</label>
          <textarea
            required
            id="description"
            onChange={(e) => {
              changeHandler("description", e.target.value);
            }}
            className="bg-gray-300 focus-visible:outline-none "
            type="text"></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">DUE DATE</label>
          <input
            required
            id="date"
            onChange={(e) => {
              changeHandler("date", e.target.value);
            }}
            className="bg-gray-300 focus-visible:outline-none "
            type="date"></input>
        </div>
      </div>
    </form>
  );
});

export default NewProject;
