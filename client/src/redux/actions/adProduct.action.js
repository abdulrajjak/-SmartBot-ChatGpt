import * as constants from "../constants/adProduct.constant";

export const adProduct = (payload) => ({
  type: constants.ADPRODUCT,
  payload
});

export const adProductSuccessfull = (payload) => ({
  type: constants.ADPRODUCT_SUCCESSFUL,
  payload,
});

export const adProductFailed = () => ({
  type: constants.ADPRODUCT_SUCCESSFUL_FAILED,
});
