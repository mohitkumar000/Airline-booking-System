const express = require('express');

const {PORT} = require('./config/serverConfig')

const setupAndStart= async() =>
{
    //create the exress object
    const app = express();
    const PORT = 3000;

    app.listen(3000, () => {
        console.log(`Server started at ${PORT}`);
    })
}
setupAndStart();