/*用户*/
const mongoose = require('../connection');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    salt: {
        type: String,
        default: ''
    },
    hash: {
        type: String,
        default: ''
    },
    age: {
        type: Number,
        default: 0
    },
    sex: {
        type: Boolean,
        default: true
    },
    sites: [{type: Schema.Types.ObjectId, ref: 'Site'}]
}, {collection: 'User'});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;