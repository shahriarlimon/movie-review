const express = require('express');
const cors = require('cors');
const colors = require('colors');
const userRouter = require('./routes/user.js');
require("./db/index.js")
const app = express();
app.use(cors())
app.use(express.json())
app.use('/api/v1/user', userRouter)
const port = 5000;
app.listen(port, () => {
    console.log(`App is listening on ${port}`.red.bold)
})