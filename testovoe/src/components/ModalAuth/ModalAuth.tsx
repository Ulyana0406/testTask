import styles from "./ModuleAuth.module.scss";
import { useEffect } from "react";
const Modaly = ({
  isActive,
  setActive,
}: {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isActive]);
  return (
    <dialog open={isActive} className={styles.dialog}>
      <button
        className={styles.closeButton}
        onClick={() => {
          setActive(false);
        }}
      >
        <img src="exit.png"></img>
      </button>
      <div className={styles.modal}>
        <h3 className={styles.enter}>Вход в систему</h3>
        <div className={styles.inputDiv}>
          <label className={styles.label}>E-mail</label>
          <input
            className={styles.input}
            type="text"
            placeholder="example@email.com"
          ></input>
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Пароль</label>
          <input
            className={styles.input}
            type="password"
            placeholder="••••••••••••••••••"
          ></input>
        </div>
        <div className={styles.remember}>
          <input className={styles.rememberCheck} type="checkbox" />
          <p className={styles.rememberMe}>Запомнить меня </p>
        </div>
        <button className={styles.enterButton}>Войти</button>
        <div className={styles.another}>
          <h4 className={styles.anotherEnter}>Или войдите с помощью</h4>
          <div className={styles.logButtons}>
            <button className={styles.socialButton}>
              <img src="google.png" alt="" />
              Google
            </button>
            <button className={styles.socialButton}>
              <img src="apple.png" alt="" />
              Apple ID
            </button>
          </div>
          <div className={styles.registrdiv}>
            <h4 className={styles.anotherEnter}>Впервые в системе?</h4>
            <a className={styles.registr}> Регистрация</a>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modaly;
