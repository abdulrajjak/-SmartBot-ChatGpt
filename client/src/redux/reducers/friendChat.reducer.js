/* eslint-disable default-case */
import * as constants from "../constants/friendChat.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  friendChatRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "\nYou:",
  }
};

export const friendChatReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case constants.FRIEND_CHAT:
      return {
        ...state,
        friendChatRes: {
          ...state.friendChatRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.FRIEND_CHAT_SUCCESSFUL:
      return {
        ...state,
        friendChatRes: {
          ...state.friendChatRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.FRIEND_CHAT_SUCCESSFUL_FAILED:
      return {
        ...state,
        friendChatRes: {
          ...state.friendChatRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };  
      case constants.FRIEND_CHAT_UPDATE:
        return {
          ...state,
          friendChatRes: {
            ...state.friendChatRes,
            data:payload
          },
        };  
    default:
      return state;
  }
};
