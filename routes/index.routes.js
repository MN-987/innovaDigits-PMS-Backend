
const teamRouter = require("./team.routes.js");
const connectDB = require("../config/dbConnection.js");
const { globalErrorHandling } = require("../util/errorHandling.js");
const cookieParser = require("cookie-parser");
const levelRouter = require("./level.routes.js");
const competencyRouter = require('./competency.routes.js')
const categoryRouter = require('./category.routes.js')
const authRouter = require('./auth.routes.js');
const express = require('express');
const userRoutes = require("../routes/user.routes.js");
const cors = require('cors');
const Competency = require("../data/competency.model.js");
const bootstrap = (app, express) => {

    //register middlewares 
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));

    app.use(express.urlencoded({ extended: true }));

    app.use(express.static('public'));

    const corsOptions = {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // Enable credentials (cookies, HTTP authentication) cross-origin
    };
    app.use(cors(corsOptions));


    // app.use(cors({
    //     "origin": "*",
    //     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    //     "preflightContinue": false,
    //     "optionsSuccessStatus": 204
    //   }))

    //Setup API Routing 
    app.use("/api/v1/teams", teamRouter);
    app.use('/api/v1/levels', levelRouter);
    app.use('/api/v1/category', categoryRouter);

    app.use("/api/v1/user", userRoutes);
    app.use("/api/v1/competency", competencyRouter)
    app.use("/api/v1/auth", authRouter);



    app.use("*", (req, res, next) => {
        return res.json({ message: "In-valid Routing" });
    });

    app.use(globalErrorHandling);
    connectDB();

};

module.exports = bootstrap;
