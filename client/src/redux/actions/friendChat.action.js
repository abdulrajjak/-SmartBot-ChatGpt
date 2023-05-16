import * as constants from "../constants/friendChat.constant";

export const friendChat = (payload) => ({
  type: constants.FRIEND_CHAT,
  payload
});

export const friendChatSuccessfull = (payload) => ({
  type: constants.FRIEND_CHAT_SUCCESSFUL,
  payload,
});

export const friendChatFailed = () => ({
  type: constants.FRIEND_CHAT_SUCCESSFUL_FAILED,
});


export const onChangeChat=(payload)=>({
  type:constants.FRIEND_CHAT_UPDATE,
  payload,
})