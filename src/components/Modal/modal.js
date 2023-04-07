import Styles from "./modal.module.css";

const Modal = function ({ active, setActive }) {
  return (
    <div className={Styles.globalModal}>
      <div className={Styles.modal}>
        <div className={Styles.close}>
          <button className={Styles.but}>X</button>
        </div>
        <div className={Styles.modal__text}>
          <h3>Удалить все задачи?</h3>
        </div>

        <div className={Styles.modal__button}>
          <button className={Styles.button}>Удалить</button>
          <button className={Styles.button}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
