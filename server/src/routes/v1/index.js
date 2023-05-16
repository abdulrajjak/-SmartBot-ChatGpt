const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const chatRoute = require("./chat.route");
const codeGenRoute = require("./codeGenerator.route");
const sqlGeneratorRoute = require("./sqlGenerator.route");
const imageGenRoute = require('./imageGenerator.route');
const grammarCheckRoute = require("./grammarCheck.route");
const restaurantReviewRoute = require("./restaurantReview.route");
const interviewQuestionRoute = require("./interviewQues.route");
const adProductRoute = require("./adProduct.route");
const friendChatRoute = require("./friend-chat.route");
const scanProduct = require('./scanProduct.route');
const diseaseRoute = require("./disease.route")
const productSuggestionRoute = require("./healthProductSuggestion.route");
const ingredientSummaryRoute = require("./ingredientSummary.route")
const userHistoryRoute = require("./userHistory.route")
const router = express.Router();
const mealRoute = require("./meal.route")
const exerciseRoute = require("./exercise.route")
const quotesRoute = require("./quotes.route")
const generateADRoute = require("./adsForPlatform.route")

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/chat',
    route: chatRoute,
  },
  {
    path: '/codegen',
    route: codeGenRoute
  },
  {
    path: '/sqlgenerator',
    route: sqlGeneratorRoute,
  },
  {
    path: '/imagegen',
    route: imageGenRoute,
  },
  {
    path: '/grammarcheck',
    route: grammarCheckRoute
  },
  {
    path: '/restaurantreview',
    route: restaurantReviewRoute
  },
  {
    path: '/interviewques',
    route: interviewQuestionRoute
  }
  ,
  {
    path: '/adprodduct',
    route: adProductRoute
  }
  ,
  {
    path: '/friend',
    route: friendChatRoute
  },
  {
    path: '/disease',
    route: diseaseRoute
  },
  {
    path: "/productSuggestion",
    route: productSuggestionRoute
  },
  {
    path: "/ingredientSummary",
    route: ingredientSummaryRoute
  }
  ,
  {
    path: '/scanproduct',
    route: scanProduct
  },
  {
    path: '/meal',
    route: mealRoute
  },
  {
    path: '/exercise',
    route: exerciseRoute
  },
  {
    path: "/quotes",
    route: quotesRoute
  },
  {
    path: "/createhistory",
    route: userHistoryRoute
  },
  {
    path:"/generateAd",
    route: generateADRoute
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
