import { useEffect, useState } from "react";
import "./App.css";
import TodoTask from "./TodoTask/TodoTask";
import {
  addTodoInLs,
  deleteTodoFromLs,
  getTodoFromLs,
} from "./Utilities/Utilities";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = getTodoFromLs();
    storedTodos ? setTodos(storedTodos) : "";
  }, []);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);
  };

  const genarateUnicId = () => {
    const timeStmap = Date.now().toString(36);
    const id = "_" + Math.random(10).toString(36).substring(2, 5);
    return timeStmap + id;
  };

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: genarateUnicId(),
        todo: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");

      addTodoInLs(newTodo);
      toast.success("Create New Todo");
    } else {
      toast.error("Please Input Something");
    }
  };

  const handleDeletedTodo = (todo) => {
    const updateTodos = todos.filter((item) => item !== todo);
    setTodos(updateTodos);
    deleteTodoFromLs(todo.id);
    toast.info("Deleted successfully");
  };
  return (
    <div className="container text-center mx-auto bg-gray-200 my-3 p-4 rounded-lg">
      <ToastContainer />
      <div className="bg-white p-2 rounded-lg">
        <h1 className="text-3xl font-bold">ToDo-App</h1>
      </div>
      {/* input field */}
      <div className="mt-5 w-full bg-white p-3 rounded-lg flex justify-center items-center">
        <div>
          <input
            className="w-full p-3 rounded-l-full bg-[#F1ECE6] font-medium text-xl text-gray-500 "
            type="text"
            name=""
            id="inputField"
            placeholder="Add something..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-center">
          <input
            className="bg-[#76B7CD] py-3 px-5 text-center font-bold text-xl rounded-r-full text-white cursor-pointer hover:bg-[#1b8eb4]"
            type="submit"
            onClick={handleAdd}
            value="Add"
          />
        </div>
      </div>

      {/* todo items  */}
      {todos.length === 0 ? (
        <div className="my-5">
          <progress className="progress w-full"></progress>
          <h2 className="mt-2 font-bold text-2xl">Todos Not Avilabe !</h2>
        </div>
      ) : (
        todos.map((task) => (
          <TodoTask
            handleDeletedTodo={handleDeletedTodo}
            key={task.id}
            task={task}
          ></TodoTask>
        ))
      )}
    </div>
  );
}

export default App;
