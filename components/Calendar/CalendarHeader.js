import { useSelector, useDispatch } from "react-redux";
import { format, subMonths, addMonths } from "date-fns";
import { calendarActions } from "../../store/calendar-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/CalendarHeader.module.scss";

const CalendarHeader = (props) => {
    // const currentMonth = useSelector(state => state.currentMonth);
    const dispatch = useDispatch();
    const dateFormat = "MMMM yyyy";

    library.add(faChevronLeft);
    library.add(faChevronRight);

    const prevMonth = () => {
        // dispatch(calendarActions.prevMonth(subMonths(currentMonth, 1)));
        props.onSetCurrentMonth(subMonths(props.currentMonth, 1));
    };

    const nextMonth = () => {
        // dispatch(calendarActions.nextMonth(addMonths(currentMonth, 1)));
        props.onSetCurrentMonth(addMonths(props.currentMonth, 1));
    };

    return <div className={styles["calendar-header"]}>
        <div className={styles.column}>
            <button className={styles.arrow} onClick={prevMonth}><FontAwesomeIcon icon="chevron-left" /></button>
        </div>
        <div className={styles["month"]}>
            <span>{format(props.currentMonth, dateFormat)}</span>
        </div>
        <div className={styles.column}>
            <button className={styles.arrow} onClick={nextMonth}><FontAwesomeIcon icon="chevron-right" /></button>
        </div>
    </div>
};

export default CalendarHeader;