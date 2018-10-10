var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 1
    },
    brand: {
        type: String,
        default: ''
    },
    slogan: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    detail: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    tel: {
        type: String,
        default: ''
    }
});



module.exports = mongoose.model('Brand', userSchema);