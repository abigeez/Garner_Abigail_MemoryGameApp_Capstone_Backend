const express = require('express');
const router = express.Router();

const {index, create, destroy } = require('../controllers/comments');

//http://localhost:8000/comments

//get comments
router.get('/',index);

//create comments

router.post('/', create);

router.delete('/:id', destroy);


module.exports = router;

