import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/imageGenerator.action";
import * as constants from "../constants/imageGenerator.constant";
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

export function* ImageGenerator(data) {
    const apiConfig = getApiConfig();
    try {
        const { payload } = data;
   
        const response = yield call(
            NetworkApi.post,
            paths.IMAGE_GENERATOR_OPEN_API_URL,
            payload,
            apiConfig.headers
        );

        if (response.status && response.data) {
            const data = JSON.stringify(response.data.data[0].url);
         
            yield put(actions.imageGeneratorSuccessfull(data));
            yield put(
                showNotification("Data fetched successfully", "success")
            );
        }

    } catch (e) {
        const errorMessage = e.message;
        yield put(actions.imageGeneratorFailed());
        yield put(showNotification(errorMessage, "warning"));
    }
}

export function* reqImageGenerator() {
    yield takeLatest(constants.IMAGE_GENERATOR, ImageGenerator);
}


