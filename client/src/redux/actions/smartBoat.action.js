import * as constants from "../constants/smartBoat.constant";

export const smartBoat = (payload) => ({
  type: constants.SMART_BOAT,
  payload
});

export const smartBoatSuccessfull = (payload) => ({
  type: constants.SMART_BOAT_SUCCESSFUL,
  payload,
});

export const smartBoatFailed = () => ({
  type: constants.SMART_BOAT_SUCCESSFUL_FAILED,
});


export const onChangesmartBoat=(payload)=>({
  type:constants.SMART_BOAT_UPDATE,
  payload,
})
