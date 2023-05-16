/* eslint-disable default-case */
import * as constants from "../constants/openai.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  chatboatRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const openaiReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case constants.REQUEST_CHATBOAT:
      return {
        ...state,
        chatboatRes: {
          ...state.chatboatRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.REQUEST_CHATBOAT_SUCCESSFUL:
      return {
        ...state,
        chatboatRes: {
          ...state.chatboatRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.REQUEST_CHATBOAT_FAILED:
      return {
        ...state,
        chatboatRes: {
          ...state.chatboatRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };    
    default:
      return state;
  }
};
