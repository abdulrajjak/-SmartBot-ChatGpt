import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.reviewGenerator;

const reviewGeneratorSelectors = createSelector(selectState, (state) => state);

export default reviewGeneratorSelectors;
