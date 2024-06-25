
const {Schema, model } = require('../db/conn');

const commentSchema = new Schema({
    author: String,
    body: String,
    comments :[{body: String, date: Date}],
    date: {type: Date, default: Date.now}

    
    }




);


module.exports = model('CommentSection',commentSchema);