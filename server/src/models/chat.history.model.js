const mongoose = require('mongoose');


const chatHistrySchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    name:{
        type:String,
        uppercase:true
    },
    chat:{
        type:String
    }

})
const ChatHistory = mongoose.model('Chat', chatHistrySchema);
module.exports = ChatHistory;
