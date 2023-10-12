/* eslint-disable linebreak-style */
import dotenv from "dotenv";
dotenv.config();

/* const PORT = process.env.PORT; */
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET;

export default { MONGODB_URI, SECRET };
