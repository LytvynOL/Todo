import { IoIosTrash, IoMdRefresh } from "react-icons/io";
import styles from "./ButtonDelAll.module.css";

const Button = function ({ deleteAllTodo, todo, deleteAll }) {
  return (
    <>
      <button className={styles.button} onClick={() => deleteAllTodo(todo)}>
        <IoIosTrash className={styles.icon} />
      </button>
      <button className={styles.button} onClick={deleteAll}>
        <IoMdRefresh className={styles.icon} />
      </button>
    </>
  );
};

export default Button;
