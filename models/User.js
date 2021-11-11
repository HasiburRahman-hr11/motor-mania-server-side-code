const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: String,
    email: String,
    role:{
        type:String,
        default:'subscriber'
    }
}, { timestamps: true });

const User = model('User', userSchema);
module.exports = User;