import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.webcamImage;

const webcamImageSelectors = createSelector(selectState, (state) => state);
export default webcamImageSelectors;
