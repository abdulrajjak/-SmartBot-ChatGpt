import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.smartBoat;
const smartBoatSelectors = createSelector(selectState, (state) => state);
export default smartBoatSelectors;
