const mongoose = require("mongoose");

const Schema = mongoose.Schema
const uuid = require('uuid').v4;
const Level = require('./level.model.js');
const Team = require('./team.model.js');
const crypto = require('crypto');

const {
    asyncHandler
} = require("../util/errorHandling");
const { string } = require("joi");


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 15,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 15,
        lowercase: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 3,
        maxLength: 15,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
        default: 'hashedPassword'
    },
    position: {
        type: String,
    },
    level: {
        type: Schema.Types.ObjectId,
        ref: 'Level'
    },
    role: {
        type: Schema.Types.Mixed,
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    refreshToken: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    passwordResetToken: {
        type: String
    },
    passwordActivationToken: {
        type: String,
        default: uuid()
    },
    emailConfirmed: {
        type: Boolean,
        default: false
    },
})

/*
I was trying to apply populate before finding but it did not work
*/

// asyncHandler(userSchema.pre('save', async function (next) {
//     const passwordActivationToken= crypto.randomBytes(20).toString('hex');
//    this.passwordActivationToken=passwordActivationToken
// }))

// asyncHandler(userSchema.pre('find', async function (next) {
//     this.populate('team').execPopulate();
//     this.populate('level').execPopulate();
//     next();
// }))
const User = mongoose.model('User', userSchema);

module.exports = User;