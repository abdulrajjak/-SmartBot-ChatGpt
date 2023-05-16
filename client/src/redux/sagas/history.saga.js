import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/history.action";
import * as constants from "../constants/history.constant";
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

// get data list
export function* History(data) {
  const apiConfig = getApiConfig();
  try{
    const { payload } = data;
    
    const response = yield call(
      NetworkApi.get, 
      paths.HISTORY_OPEN_API_URL, 
    //   payload,
      apiConfig.headers
    );
    if (response.status && response.data) {
      const data = response.data;
      yield put(actions.historySuccessfull(data));
      yield put(
        showNotification("Data fetched successfully", "success")
      );
    }
  } catch(e) {
    const errorMessage = e.message;
    yield put(actions.historyFailed());
    yield put(showNotification(errorMessage, "warning"));
  }
}

export function* reqHistory() {
  yield takeLatest(constants.HISTORY, History);
}


