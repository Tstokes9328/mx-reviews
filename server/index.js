const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Top Level Middleware
app.use(bodyParser.json());

//Get Server Listening..
app.listen(3005, () => {
    console.log('server is running!');
});