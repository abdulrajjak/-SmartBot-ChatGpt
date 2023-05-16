const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const Token = require('../models/token.model');
const ApiError = require('../utils/ApiError');
const userHistory = require('../models/user.history.model');

/**
* Chat
* @param {string} image
* @param {string} response
* @returns {Promise<any>}
*/
const createhistory = async (image,response,title, user) => {
  return await userHistory.create({ image,response,title, user });
};

const getHistory = async (user) => {
    return await userHistory.find({user})
  };
  


module.exports = {
  createhistory,
  getHistory
}