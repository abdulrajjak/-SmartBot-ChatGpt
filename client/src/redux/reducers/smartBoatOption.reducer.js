/* eslint-disable default-case */
import * as constants from "../constants/smartBoatOption.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  smartBoatOptionRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const smartBoatOptionReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case constants.SMARTBOAT_OPTION:
      return {
        ...state,
        smartBoatOptionRes: {
          ...state.smartBoatOptionRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.SMARTBOAT_OPTION_SUCCESSFUL:
      return {
        ...state,
        smartBoatOptionRes: {
          ...state.smartBoatOptionRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.SMARTBOAT_OPTION_SUCCESSFUL_FAILED:
      return {
        ...state,
        smartBoatOptionRes: {
          ...state.smartBoatOptionRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };  
      case constants.SMARTBOAT_OPTION_UPDATE:
        return {
          ...state,
          smartBoatOptionRes: {
            ...state.smartBoatOptionRes,
            data:payload
          },
        };  
    default:
      return state;
  }
};
