import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.imageGenerator;

const imageGeneratorSelectors = createSelector(selectState, (state) => state);

export default imageGeneratorSelectors;
