const Comments = require('../models/CommentSection');

async function index (req,res) {
    try{
        const comments = await Comments.find({});
        if (comments) {
            res.status(200).send(comments);
        }
    }
}