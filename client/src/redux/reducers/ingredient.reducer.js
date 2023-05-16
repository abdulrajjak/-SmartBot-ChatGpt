/* eslint-disable default-case */
import * as constants from "../constants/ingredient.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
    ingredientRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  }
};

export const ingredientReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case constants.INGREDIENT:
      return {
        ...state,
        ingredientRes: {
          ...state.ingredientRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.INGREDIENT_SUCCESSFUL:
      return {
        ...state,
        ingredientRes: {
          ...state.ingredientRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.INGREDIENT_SUCCESSFUL_FAILED:
      return {
        ...state,
        ingredientRes: {
          ...state.ingredientRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };  
      case constants.INGREDIENT_UPDATE:
        return {
          ...state,
          ingredientRes: {
            ...state.ingredientRes,
            data:payload
          },
        };  
    default:
      return state;
  }
};
