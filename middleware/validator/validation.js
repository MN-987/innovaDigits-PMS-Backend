
module.exports.validation=(schema, considerHeaders = false) => {
    return (req, res, next) => {
        const inputData = {...req.body, ...req.query, ...req.params}
       
        if(req.file || req.files){
            inputData.file = req.file || req.files
        }
        if (req.headers.authorization && considerHeaders) {
            inputData = {authorization: req.headers.authorization}
        }
        const validationResult = schema.validate(inputData, { abortEarly: false })
        if (validationResult.error?.details) {
            return res.status(400).json({ message: "Validation Err", validationErr: validationResult.error.details})
        }
        return next()
    }
}

