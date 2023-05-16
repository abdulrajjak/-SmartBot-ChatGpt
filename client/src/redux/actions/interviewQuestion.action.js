import * as constants from "../constants/interviewQuestion.constant";

export const interviewQuestion = (payload) => ({
  type: constants.INTERVIEWQUESTION,
  payload
});

export const interviewQuestionSuccessfull = (payload) => ({
  type: constants.INTERVIEWQUESTION_SUCCESSFUL,
  payload,
});

export const interviewQuestionFailed = () => ({
  type: constants.INTERVIEWQUESTION_SUCCESSFUL_FAILED,
});
