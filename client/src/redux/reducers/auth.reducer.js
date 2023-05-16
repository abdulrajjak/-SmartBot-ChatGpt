/* eslint-disable default-case */
import * as constants from "../constants/auth.constant";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
  logedIn: {
    ...GLOBAL_INTITIAL_STATE,
    data: {},
  },
  verifiedEmail: {
    ...GLOBAL_INTITIAL_STATE,
    data: {},
  }
};

export const authReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case constants.LOGIN:
      return {
        ...state,
        logedIn: {
          ...state.logedIn,
          isLoading: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case constants.LOGIN_SUCCESSFUL:
      return {
        ...state,
        logedIn: {
          ...state.logedIn,
          isLoading: false,
          isSuccessful: true,
          isFailure: false,
          data: payload,
        },
      };
    case constants.LOGIN_FAILED:
      return {
        ...state,
        logedIn: {
          ...state.logedIn,
          isLoading: false,
          isSuccessful: false,
          isFailure: true,
        },
      };

    case constants.LOGIN_RESET:
      return {
        ...state,
        logedIn: {
          ...state.logedIn,
          isLoading: false,
          isSuccessful: false,
          isFailure: false,
          data: {},
        },
      };
    
      case constants.REGISTER:
        return {
          ...state,
          logedIn: {
            ...state.logedIn,
            isLoading: true,
            isSuccessful: false,
            isFailure: false,
          },
        };
      case constants.REGISTER_SUCCESSFUL:
        return {
          ...state,
          logedIn: {
            ...state.logedIn,
            isLoading: false,
            isSuccessful: true,
            isFailure: false,
            data: payload,
          },
        };
      case constants.REGISTER_FAILED:
        return {
          ...state,
          logedIn: {
            ...state.logedIn,
            isLoading: false,
            isSuccessful: false,
            isFailure: true,
          },
        };
        case constants.VerifyEmail:
        return {
          ...state,
          verifiedEmail: {
            ...state.verifiedEmail,
            isLoading: true,
            isSuccessful: false,
            isFailure: false,
          },
        };
      case constants.VerifyEmail_SUCCESSFUL:
        return {
          ...state,
          verifiedEmail: {
            ...state.verifiedEmail,
            isLoading: false,
            isSuccessful: true,
            isFailure: false,
            data: payload,
          },
        };
      case constants.VerifyEmail_FAILED:
        return {
          ...state,
          verifiedEmail: {
            ...state.verifiedEmail,
            isLoading: false,
            isSuccessful: false,
            isFailure: true,
          },
        };    
    default:
      return state;
  }
};
