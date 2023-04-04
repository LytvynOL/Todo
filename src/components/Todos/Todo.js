import styles from "./Todo.module.css";
import { IoMdDisc } from "react-icons/io";

function Todo({ todo, deleteTodo, id }) {
  const del = () => deleteTodo(id);
  return (
    <div className={styles.todo} onDoubleClick={del}>
      <IoMdDisc className={styles.icon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
