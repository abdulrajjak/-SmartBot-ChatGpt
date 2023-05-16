import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.openai;

const openaiSelectors = createSelector(selectState, (state) => state);

export default openaiSelectors;
