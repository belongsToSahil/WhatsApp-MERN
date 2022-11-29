import express from 'express'
import dotenv from 'dotenv'   // include dotenv 
import initRoutes from './routes/initRoutes.js'
import bodyParser from "body-parser";
import config from './config/config.js'; //config db to our server
dotenv.config();  // initialize dotenv
config();  //call config function 

const app  = express(); // initialize express
const port = process.env.PORT || 5001  // fetch port info from dotenv using {process.env.PORT} here PORT is just a variable

app.use(bodyParser.json({ limit: "100mb" })); 

app.use("/" , initRoutes) // initialize routes

app.listen(port , () => {  //app.listen for instructing express to start server at following port 
    console.log(`Server is started in port ${port} `);
});