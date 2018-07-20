const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaModel = new Schema({
    roomNo: {type: String},
    roomType: {type: String},
    roomStatus: {type: String},
    rent: {type: String},
    name: {type: String},
    days: {type: String},
});

module.exports = mongoose.model('room', SchemaModel);
