/* eslint-disable default-case */
import * as constants from "../constants/interviewQuestion.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  interviewQuestionRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const interviewQuestionReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case constants.INTERVIEWQUESTION:
      return {
        ...state,
        interviewQuestionRes: {
          ...state.interviewQuestionRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.INTERVIEWQUESTION_SUCCESSFUL:
      return {
        ...state,
        interviewQuestionRes: {
          ...state.interviewQuestionRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.INTERVIEWQUESTION_SUCCESSFUL_FAILED:
      return {
        ...state,
        interviewQuestionRes: {
          ...state.interviewQuestionRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };    
    default:
      return state;
  }
};
