export default function DefaultPage({ clickHandler }) {
  return (
    <div className="flex flex-col justify-center items-center text-center w-3/4 space-y-6">
      <img
        src="/src/assets/no-projects.png"
        alt="No image"
        className="w-1/12"></img>
      <h4 className="font-bold text-2xl text-black/60">No Project Selected</h4>
      <p className="text-black/60 text-sm">
        select a project or get started with a new one
      </p>
      <button
        onClick={clickHandler}
        className="bg-gray-800 text-white/70 px-4 py-2 rounded-md hover:bg-slate-100 hover:text-gray-800">
        Create new project
      </button>
    </div>
  );
}
