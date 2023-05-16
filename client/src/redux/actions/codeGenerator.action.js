import * as constants from "../constants/codeGenerator.constant";

export const codeGenerator = (payload) => ({
  type: constants.CODE_GENERATOR,
  payload
});

export const codeGeneratorSuccessfull = (payload) => ({
  type: constants.CODE_GENERATOR_SUCCESSFUL,
  payload,
});

export const codeGeneratorFailed = () => ({
  type: constants.CODE_GENERATOR_SUCCESSFUL_FAILED,
});
