import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.adProduct;

const adProductSelectors = createSelector(selectState, (state) => state);

export default adProductSelectors;
