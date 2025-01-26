
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    id: {
        type:Number,
        //required:true
    },
    name: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;