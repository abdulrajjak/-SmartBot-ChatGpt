import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/smartBoatOption.action";
import * as constants from "../constants/smartBoatOption.constant";
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
export function* SmartBoatOption(data) {
  const apiConfig = getApiConfig();
  try{
    const { payload } = data;
    
    const response = yield call(
      NetworkApi.get, 
      paths.SMARTBOAT_OPTION_OPEN_API_URL, 
    //   payload,
      apiConfig.headers
    );
    if (response.status && response.data) {
      const data = response.data;
    //   const dataToSet=payload.chat+data+`\n\nYou:`
      yield put(actions.smartBoatOptionSuccessfull(data));
      yield put(
        showNotification("Data fetched successfully", "success")
      );
    }
  } catch(e) {
    const errorMessage = e.message;
    yield put(actions.smartBoatOptionFailed());
    yield put(showNotification(errorMessage, "warning"));
  }
}

export function* reqSmartBoatOption() {
  yield takeLatest(constants.SMARTBOAT_OPTION, SmartBoatOption);
}


