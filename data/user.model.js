const mongoose = require("mongoose");
const Schema = mongoose.Schema
const uuid = require('uuid').v4;

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
        type: Schema.Types.Mixed,
    },
    role: {
        type: Schema.Types.Mixed,
    },
    team: {
        type: Schema.Types.Mixed,
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
    refreshToken: {
        type: String
    },
    passwordResetToken: {
        type: String
    },
    emailConfirmationToken: {
        type: String,
        default: uuid()
    },
    emailConfirmed: {
        type: Boolean,
        default: false
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;