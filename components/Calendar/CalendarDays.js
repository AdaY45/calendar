import { useSelector } from "react-redux";
import { format, startOfWeek, addDays } from "date-fns";
import styles from "../../styles/CalendarDays.module.scss";

const CalendarDays = (props) => {
    // const currentMonth = useSelector(state => state.currentMonth);
    const dateFormat = "eeeee";
    const days = [];

    let startDate = startOfWeek(props.currentMonth);
    // const s = format(addDays(startDate, i), dateFormat);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={styles.day} key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className={styles.days}>{days}</div>;
};

export default CalendarDays;