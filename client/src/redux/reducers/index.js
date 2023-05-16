import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { customNotificationReducer } from "./customNotification.reducer";
import { openaiReducer } from "./openai.reducer";
import { sqlGeneratorReducer } from "./sqlGenerator.reducer";
import { codeGeneratorReducer } from "./codeGenerator.reducer";
import { imageGeneratorReducer } from "./imageGenerator.reducer";
import { grammarCheckReducer } from "./grammarCheck.reducer";
import { reviewGeneratorReducer } from "./reviewGenerator.reducer";
import { interviewQuestionReducer } from "./interviewQuestion.reducer";
import { adProductReducer } from "./adProduct.reducer";
import { friendChatReducer } from "./friendChat.reducer";
import { smartBoatOptionReducer } from "./smartBoatOption.reducer";
import { smartBoatReducer } from "./smartBoat.reducer";
import { webcamImageReducer } from "./webcamImage.reducer";
import { historyReducer } from "./history.reducer";
import { ingredientReducer } from "./ingredient.reducer";

const reducers = combineReducers({
  auth: authReducer,
  customNotification: customNotificationReducer,
  openai:openaiReducer,
  sqlGenerator:sqlGeneratorReducer,
  codeGenerator:codeGeneratorReducer,
  imageGenerator:imageGeneratorReducer,
  grammarCheck:grammarCheckReducer,
  reviewGenerator:reviewGeneratorReducer,
  interviewQuestion:interviewQuestionReducer,
  adProduct:adProductReducer,
  friendChat:friendChatReducer,
  smartBoatOption:smartBoatOptionReducer,
  smartBoat:smartBoatReducer,
  webcamImage: webcamImageReducer,
  history: historyReducer,
  ingredient:ingredientReducer
});
export default reducers;
