/* eslint-disable default-case */
import * as constants from "../constants/customNotification.constant";

const INITIAL_STATE = {
  notification: {
    text: "",
    type: "info"
  }
};

export const customNotificationReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case constants.SHOW_NOTIFICATION:
      return {
        ...state,
        notification: { text: payload.text, type: payload.type }
      };
    case constants.HIDE_NOTIFICATION:
      return {
        ...state,
        notification: { text: "", type: "info" },
      };
    default:
      return state;
  }
};
