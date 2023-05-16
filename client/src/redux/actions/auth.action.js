import * as constants from "../constants/auth.constant";

export const isLogin = (payload, loginType) => ({
  type: constants.LOGIN,
  payload,
  loginType,
});

export const isLoginSuccessfull = (payload) => ({
  type: constants.LOGIN_SUCCESSFUL,
  payload,
});

export const isLoginFailed = () => ({
  type: constants.LOGIN_FAILED,
});

export const resetLogin = () => ({
  type: constants.LOGIN_RESET,
});

export const isRegister = (payload, registerType) => ({
  type: constants.REGISTER,
  payload,
  registerType,
});
export const isRegisterSuccessfull = (payload) => ({
  type: constants.REGISTER_SUCCESSFUL,
  payload,
});
export const isRegisterFailed = () => ({
  type: constants.REGISTER_FAILED,
});

export const isVerifyEmail = (payload, registerType) => ({
  type: constants.VerifyEmail,
  payload
});
export const isVerifyEmailSuccessfull = (payload) => ({
  type: constants.VerifyEmail_SUCCESSFUL,
  payload,
});
export const isVerifyEmailFailed = () => ({
  type: constants.VerifyEmail_FAILED,
});