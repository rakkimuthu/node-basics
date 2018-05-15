const mongoose = require('mongoose');
var firmschema = new mongoose.Schema({
    name:{type: String, required: true},
    mobile:{type: Number, required: true},
    place:{type: String, required: true},
});
var firms = mongoose.model('firm', firmschema);
module.exports = {firms}