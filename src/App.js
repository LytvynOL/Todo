import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodo] = useState([]);

  const handlerTodo = function (text) {
    const newTodo = {
      text: text,
      completed: false,
      id: text.length + Math.random(100),
    };

    setTodo([...todos, newTodo]);
  };

  const toggleTodo = function (todoId) {
    setTodo(
      todos.map((todo) => {
        if (todo.id == todoId) return { ...todo, completed: !todo.completed };
        return {
          ...todo,
        };
      })
    );
  };

  const deleteTodo = function (id) {
    setTodo(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={handlerTodo} />
      <TodoList todo={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
