import * as constants from "../constants/openai.constant";

export const isReqChatBoat = (payload) => ({
  type: constants.REQUEST_CHATBOAT,
  payload
});

export const isReqChatBoatSuccessfull = (payload) => ({
  type: constants.REQUEST_CHATBOAT_SUCCESSFUL,
  payload,
});

export const isReqChatBoatFailed = () => ({
  type: constants.REQUEST_CHATBOAT_FAILED,
});
