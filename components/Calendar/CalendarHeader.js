import { useSelector, useDispatch } from "react-redux";
import { format, subMonths, addMonths } from "date-fns";
import { calendarActions } from "../../store/calendar-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/CalendarHeader.module.scss";

const CalendarHeader = (props) => {
    const dispatch = useDispatch();
    const dateFormat = "MMMM yyyy";

    library.add(faChevronLeft);
    library.add(faChevronRight);

    const prevMonth = () => {
        props.onSetCurrentMonth(subMonths(props.currentMonth, 1));
    };

    const nextMonth = () => {
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