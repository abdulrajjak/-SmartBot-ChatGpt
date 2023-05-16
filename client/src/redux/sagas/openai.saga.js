import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/openai.action";
import * as constants from "../constants/openai.constant";
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

export function* isReqChatBoat(data) {
  const apiConfig = getApiConfig();
  try{
    const { payload } = data;
    console.log(payload);
    
    const response = yield call(
      NetworkApi.post, 
      paths.CHATBOAT_API_URL, 
      payload,
      apiConfig.headers
    );

    if (response.status && response.data) {
      const data = response.data.choices[0].text;
      yield put(actions.isReqChatBoatSuccessfull(data));
      yield put(
        showNotification("User register successfully", "success")
      );
    }

  } catch(e) {
    const errorMessage = e.message;
    console.log(errorMessage);
    yield put(actions.isReqChatBoatFailed());
    yield put(showNotification(errorMessage, "warning"));
  }
}

export function* reqChatBoat() {
  yield takeLatest(constants.REQUEST_CHATBOAT, isReqChatBoat);
}


