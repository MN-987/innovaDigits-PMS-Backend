const connectDB =require("../config/dbConnection") 
const { globalErrorHandling } =require("../util/errorHandling");
const teamRouter =require("./team.routes.js");
const cookieParser =require("cookie-parser");


const bootstrap = (app,express) => {

    //register middlewares 
    app.use(express.json())
    app.use(cookieParser())
    app.use(express.urlencoded({extended:true}))
    app.use(express.static('public'));

    //Setup API Routing 
    app.use("/api/teams",teamRouter);

    app.use("*",(req, res, next)=>{
        return res.json({message : "In-valid Routing"})
    })

    app.use(globalErrorHandling);
    connectDB();
}
module.exports=bootstrap;