import connectDB from "../config/dbConnection.js"
import { globalErrorHandling } from "../util/errorHandling.js"
import cookieParser from "cookie-parser"


const bootstrap = (app,express) => {

    //register middlewares 
    app.use(express.json())
    app.use(cookieParser())
    app.use(express.urlencoded({extended:true}))
    app.use(express.static('public'));

    //Setup API Routing 


    app.use("*",(req, res, next)=>{
        return res.json({message : "In-valid Routing"})
    })

    app.use(globalErrorHandling);
    connectDB();
}
export default bootstrap