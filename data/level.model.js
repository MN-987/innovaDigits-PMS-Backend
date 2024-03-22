const mongoose = require('mongoose')

const levelSchema = new mongoose.Schema({
    levelName: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Level', levelSchema);
