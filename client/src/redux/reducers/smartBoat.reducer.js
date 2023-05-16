/* eslint-disable default-case */
import * as constants from "../constants/smartBoat.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
    smartBoatRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "\nYou:",
  }
};

export const smartBoatReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
    
  switch (action.type) {
    case constants.SMART_BOAT:
      return {
        ...state,
        smartBoatRes: {
          ...state.smartBoatRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.SMART_BOAT_SUCCESSFUL:
      return {
        ...state,
        smartBoatRes: {
          ...state.smartBoatRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.SMART_BOAT_SUCCESSFUL_FAILED:
      return {
        ...state,
        smartBoatRes: {
          ...state.smartBoatRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };  
      case constants.SMART_BOAT_UPDATE:
        return {
          ...state,
          smartBoatRes: {
            ...state.smartBoatRes,
            data:payload
          },
        };  
    default:
      return state;
  }
};
