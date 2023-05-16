import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.history;
const historySelectors = createSelector(selectState, (state) => state);
export default historySelectors;
