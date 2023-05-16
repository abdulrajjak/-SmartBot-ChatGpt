const mongoose = require('mongoose');


const userHistorySchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    image:{
        type:String,
        required: false
    },
    response:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    }

},{timestamps:true})
const userHistory = mongoose.model('userHistory', userHistorySchema);
module.exports = userHistory;
