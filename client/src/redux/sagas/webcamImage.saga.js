import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/webcamImage.action";
import * as action from "../actions/ingredient.action";
import * as constants from "../constants/webcamImage.constant";
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

export function* webcamImage(data) {
  const apiConfig = getApiConfig();
  const { payload } = data;
  
  try{
    const { payload } = data;
    const response = yield call(
      NetworkApi.post, 
      paths.WEBCAMIMAGE_OPEN_API_URL, 
      payload.webcamImage,
      apiConfig.headers
    );
    if (response.status && response.data) {
      const ingredientTxt = response?.data?.ingredent[0].text;
      const ingredientTxtSplit = ingredientTxt.split(":");
      const ingredientArr = ingredientTxtSplit[1].split(",");
      yield put(actions.webcamImageSuccessfull(response.data));
      yield put(
        showNotification("Data fetched successfully", "success")
      );
      yield put(actions.getResponseData(response?.data));
      // yield put(action.ingredient({"ingredients":["potato","bread","salt","cheese"]}));  //mock data 
      yield put(action.ingredient({"ingredients":ingredientArr}));  
    }

  } catch(e) {
    const errorMessage = e.message;
    yield put(actions.webcamImageFailed());
    yield put(showNotification(errorMessage, "warning"));
  }
}

export function* reqWebcamImage() {
  yield takeLatest(constants.WEBCAM_IMAGE, webcamImage);
}


