import { ErrorClass } from "./errorClass.js"

export const asyncHandler = (fn) => {
    return(req, res, next) => {
        return fn(req, res, next).catch(error => {
            return next(new ErrorClass(error.message, error.status))
        })
    }
}


export const globalErrorHandling = (error, req, res, next) => {
    if(error){
        if(process.env.MOOD == 'DEV'){
            return res.status(error.status || 400).json({
                msgError:error.message,
                error,
                stack:error.stack})
            } else {
                return res.status(error.status || 400).json({message:error.message})
            }
        }
}