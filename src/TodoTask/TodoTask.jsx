/* eslint-disable react/prop-types */
const TodoTask = ({ task, handleDeletedTodo }) => {
  return (
    <div>
      <div className="bg-white p-2 rounded-lg my-5">
        <div className="flex justify-between items-center px-3">
          <div className="flex items-center gap-3">
            <div>
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-success" />
              </label>
            </div>
            <div className="text-xl font-medium text-wrap flex  items-center">
              <p className="w-full h-auto p-2">{task?.todo}</p>
            </div>
          </div>
          <div>
            <p className=" ">
              <i
                className="fa-solid fa-trash text-2xl font-extrabold cursor-pointer text-red-400"
                onClick={() => handleDeletedTodo(task)}
              ></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoTask;
