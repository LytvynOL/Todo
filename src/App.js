import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  const handlerTodo = function (text) {
    const newTodo = {
      text: text,
      completed: false,
      id: text.length + Math.random(100),
    };

    setTodo([...todo, newTodo]);
  };

  const deleteTodo = function (ind) {
    setTodo(todo.filter((_, id) => id !== ind));
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={handlerTodo} />
      <TodoList todo={todo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
