export default function YourProjects({ clickHandler, projects, openProject }) {
  return (
    <aside className="h-full bg-white w-1/4 flex justify-start items-end ">
      <div className="h-[90%] w-full bg-black rounded-tr-3xl flex flex-col">
        <h2 className="text-white/90 ms-8 my-12 text-2xl">YOUR PROJECTS</h2>
        <div>
          <button
            onClick={clickHandler}
            type="button"
            className="ms-8 bg-gray-900 px-8 py-4 text-white/80 rounded-lg hover:bg-white/80 hover:text-gray-700">
            + Add Project
          </button>
          <div>
            {projects.map((project, index) => {
              return (
                <button
                  onClick={() => openProject(index)}
                  key={project.date}
                  className="text-lg ms-4 mt-2 bg-black font-bold px-4 w-[90%] py-2 text-start text-white/80  hover:bg-gray-900">
                  {project.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
