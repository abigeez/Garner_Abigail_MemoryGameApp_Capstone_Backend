require ('dotenv').config();

const express = require ('express');

const app = express();

const PORT = process.env.PORT || 8000;

const cors = require ('cors');

const commentsRouter = require ('./routes/comments');




app.use(express.json());

app.use(cors());

//where baseline requests will be routed to
app.use('/comments',commentsRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});