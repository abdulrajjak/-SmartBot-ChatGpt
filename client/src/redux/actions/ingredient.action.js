import * as constants from "../constants/ingredient.constant";

export const ingredient = (payload) => ({
  type: constants.INGREDIENT,
  payload
});

export const ingredientSuccessfull = (payload) => ({
  type: constants.INGREDIENT_SUCCESSFUL,
  payload,
});

export const ingredientFailed = () => ({
  type: constants.INGREDIENT_SUCCESSFUL_FAILED,
});

export const onChangeIngredient=(payload)=>({
  type:constants.INGREDIENT_UPDATE,
  payload,
})
