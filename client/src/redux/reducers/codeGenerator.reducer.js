/* eslint-disable default-case */
import * as constants from "../constants/codeGenerator.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  codeGeneratorRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const codeGeneratorReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case constants.CODE_GENERATOR:
      return {
        ...state,
        codeGeneratorRes: {
          ...state.codeGeneratorRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.CODE_GENERATOR_SUCCESSFUL:
      return {
        ...state,
        codeGeneratorRes: {
          ...state.codeGeneratorRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.CODE_GENERATOR_SUCCESSFUL_FAILED:
      return {
        ...state,
        codeGeneratorRes: {
          ...state.codeGeneratorRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };    
    default:
      return state;
  }
};
