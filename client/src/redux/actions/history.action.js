import * as constants from "../constants/history.constant";

// get Option data list
export const history = (payload) => ({
  type: constants.HISTORY,
  payload,
});

export const historySuccessfull = (payload) => ({
  type: constants.HISTORY_SUCCESSFUL,
  payload,
});

export const historyFailed = () => ({
  type: constants.HISTORY_SUCCESSFUL_FAILED,
});

export const onChangeHistory = (payload) => ({
  type: constants.HISTORY_UPDATE,
  payload,
});
// End get Option data list

