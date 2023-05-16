/* eslint-disable default-case */
import * as constants from "../constants/sqlGenerator.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  sqlGeneratorRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const sqlGeneratorReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case constants.SQLGENERATOR:
      return {
        ...state,
        sqlGeneratorRes: {
          ...state.sqlGeneratorRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.SQLGENERATOR_SUCCESSFUL:
      return {
        ...state,
        sqlGeneratorRes: {
          ...state.sqlGeneratorRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.SQLGENERATOR_SUCCESSFUL_FAILED:
      return {
        ...state,
        sqlGeneratorRes: {
          ...state.sqlGeneratorRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };    
    default:
      return state;
  }
};
