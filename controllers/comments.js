const Comments = require('../models/CommentSection');

async function index (req,res) {
    try{
        const comments = await Comments.find({});
        if (comments) {
            res.status(200).send(comments);
        }
    } catch (err) {
        res.status(400).send(err);
    }
}

async function create(req,res) {
    try{
        const createdComment = await Comments.create(req.body);
        if (createdComment) {
            res.status(201).send(createdComment);
        }
    } catch (err) {
        res.status(400).send(err);
    }
}


async function update(req, res) {
    try {
      const updatedComment = await Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
  
      res.status(200).json(updatedComment);
    } catch (err) {
      res.status(400).send(err);
    }
  }




async function destroy(req,res) {
    try {
        const deletedComment = await Comments.findByIdandDelete(req.params.id);
        if (deletedComment) {
            res.status(201).send(deletedComment);
        }
    } catch (err) {
        res.status(400).send(err);
    }
}




module.exports = {
    index,
    create,
    update,
    destroy,
};