import * as constants from "../constants/customNotification.constant";

export const showNotification = (text, type = "info") => ({
  type: constants.SHOW_NOTIFICATION,
  payload: { text, type }
});

export const hideNotification = () => ({
  type: constants.HIDE_NOTIFICATION,
});


