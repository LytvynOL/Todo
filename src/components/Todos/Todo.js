import styles from "./Todo.module.css";
import { IoMdDisc, IoMdClose, IoMdCheckmark } from "react-icons/io";

function Todo({ todo, deleteTodo, toggleTodo }) {
  const del = () => deleteTodo(todo.id);
  const set = () => toggleTodo(todo.id);
  return (
    <div className={todo.completed ? styles.todoCompleted : styles.todo}>
      <IoMdDisc className={styles.icon} />
      <div className={styles.todoText}>{todo.text}</div>
      <IoMdClose className={styles.icon__close} onClick={del} />
      <IoMdCheckmark className={styles.icon__done} onClick={set} />
    </div>
  );
}

export default Todo;
