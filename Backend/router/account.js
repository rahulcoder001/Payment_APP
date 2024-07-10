const express = require('express');
const authmiddileware = require('../middileware/auth');
const { default: mongoose } = require('mongoose');
const { user, Acount} = require('../db');

const accountrouter = express.Router();

accountrouter.get("/getbal", authmiddileware ,async(req, res)=>{

    console.log(req.userID);
    
    const balance = await Acount.findOne({userID:req.userID});
    
    const User = await user.findOne({_id:req.userID});
    
    res.json({
          balance: balance.balance,
          name:User.name
    })
})

accountrouter.post("/transection", authmiddileware, async (req, res)=>{
const session = await mongoose.startSession();

session.startTransaction();

const { to , amount } = req.body;

const myaccount = await Acount.findOne({userID:req.userID}).session(session);

const theiraccount = await Acount.findOne({userID: to}).session(session);

if(!myaccount||myaccount.balance < amount || amount<0){
    session.abortTransaction();
    return res.status(400).json({msg: "Insufficient balance"})
}

if(!theiraccount){
    session.abortTransaction();
    return res.status(400).json({msg: "User not found"})
}

await Acount.updateOne({userID:req.userID},{$inc:{balance:-amount}}).session(session);

await Acount.updateOne({userID: to},{$inc:{balance:amount}}).session(session);

session.commitTransaction();

res.json({msg: "Transaction Successful"})
    
})

module.exports = accountrouter;