const User = require('../data/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {ErrorClass} = require('../util/errorClass');
require('dotenv').config();

module.exports.authenticateNewUser = async (username, password) => {
    const user = await User.findOne({
        username: username
    });
    if (!user) {
        return {
            status: "unauthenticated",
            data: {
                message: "username or password is incorrect"
            }
        }
    }
    /*
    for now it is passwordHash in the 
    futre when we store the hashed users password it will be 
    changed to user.passwordHash in the bcrypt compare 
    */


    const result = await bcrypt.compare(password, user.passwordHash);

    if (!result) {
        return {
            status: "unauthenticated",
            data: {
                message: "username or password is incorrect"
            }
        }
    } else {
        const token = jwt.sign({
            "username": user.username,
            "role": user.role
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1h'
        })
        const refreshToken = jwt.sign({
            "username": user.username,
            "role": user.role
        }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        })
    
        // await User.findOneAndUpdate(
        //     { username: username },
        //     { $push: { refreshToken: refreshToken } },
        //     { new: true, useFindAndModify: false }
        // );
        
    
      return{
        status: "authenticated",
        token:token,
        refreshToken:refreshToken,

      }
    }
}



module.exports.postSetPassword=async(token , password)=>{
    const user=await User.findOne({
        passwordActivationToken:token
    })
    if(!user){
       return null;
    }
   const hashedPassword= await bcrypt.hash(password,11);

  const savedUser=await User.findOneAndUpdate({
    passwordActivationToken:token
  },{
    passwordHash:hashedPassword,
    passwordActivationToken:null,
    emailConfirmed:true
    })

    return savedUser; 
        }