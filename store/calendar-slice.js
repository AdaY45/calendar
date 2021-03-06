import { createSlice } from "@reduxjs/toolkit";

const initialState = { selected: [{currentMonth: "", selectedDate: ""}], isPopupOpen: false}

const calendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        handleDateClick(state, action) {
            state.selected = {currentMonth: action.payload.currentMonth, selectedDate: action.payload.selectedDate}
            state.isPopupOpen = !state.isPopupOpen;
        },
        closePopup(state) {
            state.isPopupOpen = !state.isPopupOpen;
        }
    },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;