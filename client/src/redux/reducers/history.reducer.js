/* eslint-disable default-case */
import * as constants from "../constants/history.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  historyRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const historyReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case constants.HISTORY:
      return {
        ...state,
        historyRes: {
          ...state.historyRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.HISTORY_SUCCESSFUL:
      return {
        ...state,
        historyRes: {
          ...state.historyRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.HISTORY_SUCCESSFUL_FAILED:
      return {
        ...state,
        historyRes: {
          ...state.historyRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };  
      case constants.HISTORY_UPDATE:
        return {
          ...state,
          historyRes: {
            ...state.historyRes,
            data:payload
          },
        };  
    default:
      return state;
  }
};
