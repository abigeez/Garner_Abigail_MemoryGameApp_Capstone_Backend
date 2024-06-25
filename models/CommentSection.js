const {Schema, model } = require('../db/conn');

const commentSchema = new Schema(
{
    name: {
        type: String,
        required: true,
        unique:true,
    },
    comment: {
        type: String,
        required: true,

    },
},
    {
        timestamps:true,
    }




);


module.exports = model('CommentSection',commentSchema);