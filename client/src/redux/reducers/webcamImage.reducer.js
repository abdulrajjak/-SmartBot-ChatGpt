/* eslint-disable default-case */
import * as constants from "../constants/webcamImage.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
    webcamImageRes: {
    ...GLOBAL_INTITIAL_STATE,
    data: "",
  },
  responseData: {
    resData: ""
  }
};

export const webcamImageReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
    
  switch (action.type) {
    case constants.WEBCAM_IMAGE:
      return {
        ...state,
        webcamImageRes: {
          ...state.webcamImageRes,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.WEBCAM_IMAGE_SUCCESSFUL:
      return {
        ...state,
        webcamImageRes: {
          ...state.webcamImageRes,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.WEBCAM_IMAGE_SUCCESSFUL_FAILED:
      return {
        ...state,
        webcamImageRes: {
          ...state.webcamImageRes,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };  
      case constants.WEBCAM_IMAGE_UPDATE:
        return {
          ...state,
          webcamImageRes: {
            ...state.webcamImageRes,
            data:payload
          },
        };  
      case constants.WEBCAM_IMAGE_RESDATA:
        return {
          ...state,
          responseData: {
            ...state.responseData,
            resData: payload
          },
        };  
    default:
      return state;
  }
};
