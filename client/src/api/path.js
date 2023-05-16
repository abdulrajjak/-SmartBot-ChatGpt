let BASE_URL = process.env.REACT_APP_API_BASE_URL;

/*if (process.env.REACT_APP_STAGE === "development") {
  BASE_URL = "https://api.allballapp.com/api/v1";
} else if (process.env.REACT_APP_STAGE === "staging") {
  BASE_URL = "https://staging.allballapp.com/api/v1";
}*/
const paths = {
  LOGIN_API_URL: `${BASE_URL}/auth/login`,
  REGISTER_API_URL: `${BASE_URL}/auth/register`,
  VerifyEmail_API_URL: `${BASE_URL}/auth/verify-email`,
  CHATBOAT_API_URL: `${BASE_URL}/chat`,
  SQLGENERATOR_OPEN_API_URL: `${BASE_URL}/sqlgenerator`,
  CODE_GENERATOR_OPEN_API_URL: `${BASE_URL}/codegen`,
  GRAMMAR_CHECK_OPEN_API_URL: `${BASE_URL}/grammarcheck`,
  INTERVIEW_QUESTION_OPEN_API_URL:`${BASE_URL}/interviewques`,
  IMAGE_GENERATOR_OPEN_API_URL: `${BASE_URL}/imagegen`,
  RESTAURANT_REVIEW_OPEN_API_URL:`${BASE_URL}/restaurantreview`,
  AD_PRODUCT_OPEN_API_URL:`${BASE_URL}/adprodduct`,
  FRIEND_CHAT_OPEN_API_URL: `${BASE_URL}/friend`,
  SMARTBOAT_OPTION_OPEN_API_URL: `${BASE_URL}/disease`,
  SMARTBOAT_OPEN_API_URL: `${BASE_URL}/users/create/profile`,
  WEBCAMIMAGE_OPEN_API_URL: `${BASE_URL}/scanproduct/scan`,
  HISTORY_OPEN_API_URL: `${BASE_URL}/createhistory/userhistory`,
  INGREDIENT_OPEN_API_URL: `${BASE_URL}/ingredientSummary`,
};

export default paths;
