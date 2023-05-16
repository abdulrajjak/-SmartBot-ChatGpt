import * as constants from "../constants/grammarCheck.constant";

export const grammarCheck = (payload) => ({
  type: constants.GRAMMARCHECK,
  payload
});

export const grammarCheckSuccessfull = (payload) => ({
  type: constants.GRAMMARCHECK_SUCCESSFUL,
  payload,
});

export const grammarCheckFailed = () => ({
  type: constants.GRAMMARCHECK_SUCCESSFUL_FAILED,
});
