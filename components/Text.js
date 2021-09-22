import styles from "../styles/Text.module.scss";

const Text = () => {
  return (
    <div className={styles["img-container"]}>
      <div className={styles.text}>
        <h1>Choose the day for the meeting</h1>
        <p>
          We encourage you to book your appointment online. This will save you
          time.
        </p>
      </div>
    </div>
  );
};

export default Text;
