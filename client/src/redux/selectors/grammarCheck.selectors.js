import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.grammarCheck;

const grammarCheckSelectors = createSelector(selectState, (state) => state);

export default grammarCheckSelectors;
