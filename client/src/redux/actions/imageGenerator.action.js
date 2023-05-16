import * as constants from "../constants/imageGenerator.constant";
export const imageGenerator = (payload) => ({
  type: constants.IMAGE_GENERATOR,
  payload
});

export const imageGeneratorSuccessfull = (payload) => ({
  type: constants.IMAGE_GENERATOR_SUCCESSFUL,
  payload,
});

export const imageGeneratorFailed = () => ({
  type: constants.IMAGE_GENERATOR_SUCCESSFUL_FAILED,
});
