const todos = [];

exports.getAllTodos = () => todos;

exports.createTodo = (text) => {
  const newTodo = {
    id: todos.length + 1,
    text,
  };
  todos.push(newTodo);
  return newTodo;
};
