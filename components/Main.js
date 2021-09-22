import Text from "./Text";
import Calendar from "./Calendar/Calendar";

import styles from "../styles/Main.module.scss";

const Main = () => {
  return (
    <main>
      <div className={styles.hero}>
        <Text />
        <Calendar />
      </div>
    </main>
  );
};

export default Main;
