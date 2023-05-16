/* eslint-disable default-case */
import * as constants from "../constants/grammarCheck.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  grammarCheckRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const grammarCheckReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case constants.GRAMMARCHECK:
      return {
        ...state,
        grammarCheckRes: {
          ...state.grammarCheckRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.GRAMMARCHECK_SUCCESSFUL:
      return {
        ...state,
        grammarCheckRes: {
          ...state.grammarCheckRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.GRAMMARCHECK_SUCCESSFUL_FAILED:
      return {
        ...state,
        grammarCheckRes: {
          ...state.grammarCheckRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };    
    default:
      return state;
  }
};
