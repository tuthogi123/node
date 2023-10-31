const todoModule = require('../modules/todoModule');

exports.getAllTodos = (req, res) => {
  const todos = todoModule.getAllTodos();
  res.json(todos);
};

exports.createTodo = (req, res) => {
  const { text } = req.body;
  const newTodo = todoModule.createTodo(text);
  res.json(newTodo);
};
