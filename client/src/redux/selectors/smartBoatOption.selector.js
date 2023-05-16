import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.smartBoatOption;
const smartBoatOptionSelectors = createSelector(selectState, (state) => state);
export default smartBoatOptionSelectors;
