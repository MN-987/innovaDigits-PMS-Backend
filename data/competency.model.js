const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

// still need to add (category, visibility and team assignments) to the schema 
const competencySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    defaultDescription: {
        type: String,
        default: 'This Competency Without a Description'
    },
    seniorityLevels: [{
        level: String,
        description: String,
    }],
    category:{
        type:ObjectId,
        ref:"Category"
    },
    teamsAssigned:[{
        type:ObjectId,
        ref:"Team"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const Competency = mongoose.model('Competency', competencySchema);

module.exports = Competency;