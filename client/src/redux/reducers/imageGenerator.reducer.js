/* eslint-disable default-case */
import * as constants from "../constants/imageGenerator.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  imageGeneratorRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const imageGeneratorReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  
  switch (action.type) {

    case constants.IMAGE_GENERATOR:
      return {
        ...state,
        imageGeneratorRes: {
          ...state.imageGeneratorRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.IMAGE_GENERATOR_SUCCESSFUL:
      return {
        ...state,
        imageGeneratorRes: {
          ...state.imageGeneratorRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.IMAGE_GENERATOR_SUCCESSFUL_FAILED:
      return {
        ...state,
        imageGeneratorRes: {
         ...state.imageGeneratorRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };
    default:
      return state;
  }
};
