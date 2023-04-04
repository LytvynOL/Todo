import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todo, deleteTodo }) {
  return (
    <div className={styles.todoListStyle}>
      {todo.length === 0 && <h2>Список задач пуст</h2>}
      {todo.map((text, id) => (
        <Todo key={id} id={id} todo={text} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
