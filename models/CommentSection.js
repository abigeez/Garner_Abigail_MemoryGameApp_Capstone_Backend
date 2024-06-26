
const {Schema, model } = require('../db/conn');

const commentSchema = new Schema({
    author: String,
    body: String,
    
    date: {type: Date, default: Date.now}

    
    }




);


module.exports = model('CommentSection',commentSchema);