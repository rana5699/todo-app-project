const getTodoFromLs = () => {
  const stroedString = localStorage.getItem("todos");
  return stroedString ? JSON.parse(stroedString) : [];
};

const savedTodoLs = (todos) => {
  const todosStringify = JSON.stringify(todos);
  localStorage.setItem("todos", todosStringify);
};

const addTodoInLs = (newTask) => {
  const todos = getTodoFromLs();
  todos.push(newTask);
  savedTodoLs(todos);
};

const deleteTodoFromLs = (id) => {
  let storedTodos = getTodoFromLs();
  storedTodos = storedTodos.filter((item) => item.id !== id);
  savedTodoLs(storedTodos);
};

export { addTodoInLs, getTodoFromLs, deleteTodoFromLs };
