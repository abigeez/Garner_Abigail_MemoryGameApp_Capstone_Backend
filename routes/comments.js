const express = require('express');
const router = express.Router();

const {index, create, update, destroy } = require('../controllers/comments');

//http://localhost:8000/comments

//get comments
router.get('/',index);

//create comments

router.post('/', create);

//update comments
router.patch('/:id', update);
// delete comments

router.delete('/:id', destroy);


module.exports = router;

