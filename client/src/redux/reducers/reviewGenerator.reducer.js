/* eslint-disable default-case */
import * as constants from "../constants/reviewGenerator.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  reviewGeneratorRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const reviewGeneratorReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case constants.REVIEW_GENERATOR:
      return {
        ...state,
        reviewGeneratorRes: {
          ...state.reviewGeneratorRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.REVIEW_GENERATOR_SUCCESSFUL:
      return {
        ...state,
        reviewGeneratorRes: {
          ...state.reviewGeneratorRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.REVIEW_GENERATOR_SUCCESSFUL_FAILED:
      return {
        ...state,
        reviewGeneratorRes: {
          ...state.reviewGeneratorRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };    
    default:
      return state;
  }
};
