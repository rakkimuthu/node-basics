const mongoose = require('mongoose');
var customerschema = new mongoose.Schema({
    name:{type: String, required: true},
    mobile:{type: Number, required: true},
    place:{type: String, required: true},
});
var customers = mongoose.model('customer', customerschema);
module.exports = {customers}