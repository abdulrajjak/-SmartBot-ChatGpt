import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.interviewQuestion;

const interviewQuestionSelectors = createSelector(selectState, (state) => state);

export default interviewQuestionSelectors;
