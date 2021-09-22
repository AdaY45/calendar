import { useState } from "react";
import CalendarCells from "./CalendarCells";
import CalendarDays from "./CalendarDays";
import CalendarHeader from "./CalendarHeader";
import styles from "../../styles/Calendar.module.scss";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <div className={styles["calendar-container"]}>
      <div className={styles.calendar}>
        <CalendarHeader
          onSetCurrentMonth={setCurrentMonth}
          currentMonth={currentMonth}
        />
        <CalendarCells currentMonth={currentMonth} />
        <CalendarDays currentMonth={currentMonth} />
      </div>
    </div>
  );
};

export default Calendar;
