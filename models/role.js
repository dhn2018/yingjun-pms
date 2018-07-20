const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaModel = new Schema({
    role: {type: String},
    roleRight: {type: String},
    username: {type: String},
    password: {type: String},
});

module.exports = mongoose.model('Role', SchemaModel);
