import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/smartBoat.action";
import * as constants from "../constants/smartBoat.constant";
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

export function* SmartBoat(data) {
  const apiConfig = getApiConfig();
  try{
    const { payload } = data;
    const response = yield call(
      NetworkApi.patch, 
      paths.SMARTBOAT_OPEN_API_URL, 
      payload.smartboat,
      apiConfig.headers
    );
    if (response.status && response.data) {
      const data = response.data;
      const dataToSet=payload.smartBoat
      yield put(actions.smartBoatSuccessfull(dataToSet));
      yield put(
        showNotification("Data fetched successfully", "success")
      );
    }

  } catch(e) {
    const errorMessage = e.message;
    yield put(actions.smartBoatFailed());
    yield put(showNotification(errorMessage, "warning"));
  }
}

export function* reqSmartBoat() {
  yield takeLatest(constants.SMART_BOAT, SmartBoat);
}


