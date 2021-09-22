import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../../store/calendar-slice";
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, parseISO } from "date-fns";
import styles from "../../styles/CalendarCells.module.scss";

const CalendarCells = (props) => {
    // const { currentMonth, selectedDate, isPopupOpen } = useSelector(state => state);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const dispatch = useDispatch();
    const monthStart = startOfMonth(props.currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "dd";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    const onDateClick = (day) => {
        console.log(format(props.currentMonth, "MMMM") + " " + format(day, "do") + " " + format(day, "EEEE"));
        dispatch(calendarActions.handleDateClick({currentMonth: format(props.currentMonth, "MMMM"), selectedDate: `${format(day, "do")} ${format(day, "EEEE")}`}));
    }

    

    while(day <= endDate) {
        for(let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            days.push(
                <div className={`${styles.cell} ${!isSameMonth(day, monthStart) ? styles.disabled : isSameDay(day, selectedDate) ? styles.selected : ""}`}
                key={day}
                onClick={() => onDateClick(cloneDay)}>
                    <span className={styles.number}>{formattedDate}</span>
                </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className={styles.row} key={day}>{days}</div>
        );
        days = [];
    }
    return <div className={styles.body}>{rows}</div>
};

export default CalendarCells;