import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.codeGenerator;

const codeGeneratorSelectors = createSelector(selectState, (state) => state);

export default codeGeneratorSelectors;
