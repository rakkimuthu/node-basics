const mongoose = require('mongoose');//requires mongoose package
mongoose.Promise = global.Promise;
var mongoose_connection = mongoose.connect('mongodb://localhost/project'); // db url and db name 
module.exports = {mongoose_connection} //export mongo db