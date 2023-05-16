import * as constants from "../constants/webcamImage.constant";

export const webcamImage = (payload) => ({
  type: constants.WEBCAM_IMAGE,
  payload
});

export const webcamImageSuccessfull = (payload) =>(
  {
  type: constants.WEBCAM_IMAGE_SUCCESSFUL,
  payload,
});

export const webcamImageFailed = () => ({
  type: constants.WEBCAM_IMAGE_SUCCESSFUL_FAILED,
});


export const onChangeWebcamImage=(payload)=>({
  type:constants.WEBCAM_IMAGE_UPDATE,
  payload,
})

export const getResponseData=(payload)=>({
  type:constants.WEBCAM_IMAGE_RESDATA,
  payload,
})