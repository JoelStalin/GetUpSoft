var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 1
    },
    name: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    user: {
        type: String,
        default: ''
    },
    pass: {
        type: String,
        default: ''
    }
});



module.exports = mongoose.model('User', userSchema);