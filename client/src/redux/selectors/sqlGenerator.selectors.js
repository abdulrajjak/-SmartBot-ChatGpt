import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.sqlGenerator;

const sqlGeneratorSelectors = createSelector(selectState, (state) => state);

export default sqlGeneratorSelectors;
