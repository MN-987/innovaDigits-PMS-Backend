const express=require('express');
const router=express.Router();
const authController=require('../controller/auth.controller.js');
const {asyncHandler} =require('../util/errorHandling');
const { validation } = require('../middleware/validator/validation');
const {setPassword} = require('../middleware/validator/user.validator');

router.route('/login')
.post(
    asyncHandler(authController.postLogin)  
)


router.route('/set-password/:passwordSetToken').post(
    validation(setPassword),  asyncHandler(authController.postSetPassword)
)

router.route('/refresh-token').get(authController.getRefreshToken);


module.exports=router;