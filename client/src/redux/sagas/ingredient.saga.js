import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/ingredient.action";
import * as constants from "../constants/ingredient.constant";
import paths from "../../api/path";
import NetworkApi from "../../api/NetworkApi";
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

export function* Ingredient(data) {
  const apiConfig = getApiConfig();
  try{
    const { payload } = data;
    const response = yield call(
      NetworkApi.post, 
      paths.INGREDIENT_OPEN_API_URL, 
      payload,
      apiConfig.headers
    );
    if (response.status && response.data) {
      yield put(actions.ingredientSuccessfull(response.data));
      yield put(
        showNotification("Data fetched successfully", "success")
      );
    }

  } catch(e) {
    const errorMessage = e.message;
    yield put(actions.ingredientFailed());
    yield put(showNotification(errorMessage, "warning"));
  }
}

export function* reqIngredient() {
  yield takeLatest(constants.INGREDIENT, Ingredient);
}


