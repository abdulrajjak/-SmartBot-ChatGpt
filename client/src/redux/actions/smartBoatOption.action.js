import * as constants from "../constants/smartBoatOption.constant";

// get Option data list
export const smartBoatOption = (payload) => ({
  type: constants.SMARTBOAT_OPTION,
  payload,
});

export const smartBoatOptionSuccessfull = (payload) => ({
  type: constants.SMARTBOAT_OPTION_SUCCESSFUL,
  payload,
});

export const smartBoatOptionFailed = () => ({
  type: constants.SMARTBOAT_OPTION_SUCCESSFUL_FAILED,
});

export const onChangeSmartBoatOption = (payload) => ({
  type: constants.SMARTBOAT_OPTION_UPDATE,
  payload,
});
// End get Option data list

