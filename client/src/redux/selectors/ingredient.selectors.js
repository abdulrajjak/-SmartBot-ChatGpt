import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.ingredient;
const ingredientSelectors = createSelector(selectState, (state) => state);
export default ingredientSelectors;
