/* eslint-disable default-case */
import * as constants from "../constants/adProduct.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  adProductRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const adProductReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case constants.ADPRODUCT:
      return {
        ...state,
        adProductRes: {
          ...state.adProductRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.ADPRODUCT_SUCCESSFUL:
      return {
        ...state,
        adProductRes: {
          ...state.adProductRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.ADPRODUCT_SUCCESSFUL_FAILED:
      return {
        ...state,
        adProductRes: {
          ...state.adProductRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };    
    default:
      return state;
  }
};
