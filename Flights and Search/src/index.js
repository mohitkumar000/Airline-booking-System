const express = require('express');
//require('dotenv').config()
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');



const setupAndStart= async() =>
{
    //create the exress object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
      
    })
}
setupAndStart();