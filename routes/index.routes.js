const connectDB = require("../config/dbConnection.js");
const { globalErrorHandling } = require("../util/errorHandling.js");
const cookieParser = require("cookie-parser");
const express = require('express');

const bootstrap = (app, express) => {

    //register middlewares 
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({extended:true}));
    app.use(express.static('public'));

    //Setup API Routing 

    app.use("*",(req, res, next)=>{
        return res.json({message : "In-valid Routing"});
    });

    app.use(globalErrorHandling);
    connectDB();
};

module.exports = bootstrap;
