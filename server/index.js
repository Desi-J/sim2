const controller = require("./controller");
const express = require("express");
const bodyParser = require("body-parser");
const sessson = require('express-session');
const massive = require("massive");

require("dotenv").config();

console.log('Hi! ^_^');

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(database => {
    // console.log('db', database)
    app.set('db', database)
}).catch(error => console.log("error app SET", error));



app.get('/api/houses',controller.readHouses)
app.post('/api/houses', controller.updateHouse)
app.delete('/api/houses:id', controller.deleteHouse)


const PORT = 3003;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});


// Database = Heroku Navy