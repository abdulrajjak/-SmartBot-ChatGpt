import * as constants from "../constants/reviewGenerator.constant";

export const reviewGenerator = (payload) => ({
  type: constants.REVIEW_GENERATOR,
  payload
});

export const reviewGeneratorSuccessfull = (payload) => ({
  type: constants.REVIEW_GENERATOR_SUCCESSFUL,
  payload,
});

export const reviewGeneratorFailed = () => ({
  type: constants.REVIEW_GENERATOR_SUCCESSFUL_FAILED,
});
