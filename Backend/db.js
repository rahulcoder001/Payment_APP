const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://21012003rs:xo46gGwuYsY2e812@cluster0.srzk2sy.mongodb.net/Paytm?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('Connected to MongoDB')
})

const usershema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: {
    type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: String
})

const Accountshema = new mongoose.Schema({
     userID:{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true
     },
     balance:Number
})

const Acount =new mongoose.model("Account",Accountshema);

const user = new mongoose.model('User', usershema);

module.exports = {
 user,
 Acount
};