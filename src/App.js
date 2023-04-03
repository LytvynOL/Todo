import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  const handlerTodo = function (text) {
    setTodo([...todo, text]);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={handlerTodo} />
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
