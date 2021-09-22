import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from './calendar-slice';

const store = configureStore({reducer: calendarReducer});

export default store;