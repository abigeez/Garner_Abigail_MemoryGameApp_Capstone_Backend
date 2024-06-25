import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5050;

const app = express();


//middleware
app.use(express.json());


app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});