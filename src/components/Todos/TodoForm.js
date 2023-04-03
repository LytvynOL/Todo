import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const hundleSubmit = function (str) {
    str.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div className={styles.formStyle}>
      <form onSubmit={hundleSubmit}>
        <input
          type="text"
          placeholder="write here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
