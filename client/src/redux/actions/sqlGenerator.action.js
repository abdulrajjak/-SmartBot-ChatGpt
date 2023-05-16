import * as constants from "../constants/sqlGenerator.constant";

export const sqlGenerator = (payload) => ({
  type: constants.SQLGENERATOR,
  payload
});

export const sqlGeneratorSuccessfull = (payload) => ({
  type: constants.SQLGENERATOR_SUCCESSFUL,
  payload,
});

export const sqlGeneratorFailed = () => ({
  type: constants.SQLGENERATOR_SUCCESSFUL_FAILED,
});
