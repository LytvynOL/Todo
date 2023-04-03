import Todo from "./Todo";

function TodoList({ todo }) {
  return todo.map((text, id) => <Todo key={id} todo={text} />);
}

export default TodoList;
