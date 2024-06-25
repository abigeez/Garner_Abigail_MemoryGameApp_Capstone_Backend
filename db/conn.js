import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.ATLAS_URI || '';

const client = new MongoClient(connectionString);

let conn;

try{

    conn = await client.connect();
    console.log("succesful!")
}catch (e) {
    console.log(e);
}

let db = conn.db('capstone');

export default db;