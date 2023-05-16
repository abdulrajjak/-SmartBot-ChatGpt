import { all } from "redux-saga/effects";

import {
  logedIn,
  registered,
  verifyEmail,
} from "./auth.saga";

import { reqChatBoat } from "./openai.saga";
import { reqSqlGenerator } from "./sqlGenerator.saga";
import { reqCodeGenerator } from "./codeGenerator.saga";
import { reqImageGenerator } from "./imageGenerator.saga";
import { reqGrammarCheck } from "./grammarCheck.saga";
import { reqReviewGenerator } from "./reviewGenerator.saga";
import { reqInterviewQuestion } from "./interviewQuestion.saga";
import { reqAdProduct } from "./adProduct.saga";
import {reqFriendChat} from "./friendChat.saga"
import { reqSmartBoatOption } from "./smartboatOption.saga";
import { reqSmartBoat } from "./smartBoat.saga";
import { reqWebcamImage } from "./webcamImage.saga";
import { reqHistory } from "./history.saga";
import { reqIngredient } from "./ingredient.saga";

export default function* rootSaga() {

  yield all([
    logedIn(),
    registered(),
    verifyEmail(),
    reqChatBoat(),
    reqSqlGenerator(),
    reqCodeGenerator(),
    reqImageGenerator(),
    reqGrammarCheck(),
    reqReviewGenerator(),
    reqInterviewQuestion(),
    reqAdProduct(),
    reqFriendChat(),
    reqSmartBoatOption(),
    reqSmartBoat(),
    reqWebcamImage(),
    reqHistory(),
    reqIngredient(),
  ]);
}
