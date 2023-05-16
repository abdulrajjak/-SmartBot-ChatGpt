import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/friendChat.action";
import * as constants from "../constants/friendChat.constant";
import paths from "../../api/path";
import NetworkApi from "../../api/NetworkApi";
// import { setItems } from "../../utils/storage";
import { getItems } from "../../utils/storage";
import { showNotification } from "../actions/customNotification.action";

const getApiConfig = () => {
  const [tokenType, token] = getItems(["tokenType", "token"]);
  const headers = {
    Authorization: `${tokenType} ${token}`,
    token,
  };
  return {
    headers,
    Authorization: headers.Authorization,
  };
};

export function* FriendChat(data) {
  const apiConfig = getApiConfig();
  try{
    const { payload } = data;
    
    const response = yield call(
      NetworkApi.post, 
      paths.FRIEND_CHAT_OPEN_API_URL, 
      payload,
      apiConfig.headers
    );

    if (response.status && response.data) {
      const data = response.data.choices[0].text;
      const dataToSet=payload.chat+data+`\n\nYou:`
      yield put(actions.friendChatSuccessfull(dataToSet));
      yield put(
        showNotification("Data fetched successfully", "success")
      );
    }

  } catch(e) {
    const errorMessage = e.message;
    yield put(actions.friendChatFailed());
    yield put(showNotification(errorMessage, "warning"));
  }
}

export function* reqFriendChat() {
  yield takeLatest(constants.FRIEND_CHAT, FriendChat);
}


