import { useSelector, useDispatch } from "react-redux";
import { calendarActions } from "../../../store/calendar-slice";
import styles from "../../../styles/Popup.module.scss";

const Popup = () => {
  const {currentMonth, selectedDate} = useSelector(state => state.selected);
  const dispatch = useDispatch();

  const onClosePopup = () => {
    dispatch(calendarActions.closePopup());
  };

  return (
    <div className={styles.background}>
      <form className={styles.form}>
        <div className={styles["form-container"]}>
          <div className={styles["form-control"]}>
            <label htmlFor="month">Month</label>
            <input type="text" value={currentMonth} readOnly />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="day">Day</label>
            <input type="text" value={selectedDate} readOnly />
          </div>
          <span className={styles.close} onClick={onClosePopup}>
            &times;
          </span>
        </div>
      </form>
    </div>
  );
};

export default Popup;
