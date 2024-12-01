const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser')
const connectToDb = require('./db/db')
const userRoute = require('./routes/user.routes')

connectToDb()
app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res)=> {
    res.send('Hello world');
});

app.use(express.json());
app.use('/users', userRoute)

module.exports = app;