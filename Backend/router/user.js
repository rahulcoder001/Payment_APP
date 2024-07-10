const express = require('express');
const bcr = require("bcrypt");
const zod = require('zod');
const {user, Acount} = require('../db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');
const authmiddileware = require('../middileware/auth');

// const nameshema = z.string();
// const emailshema = z.string().email();
// const passwordschema = z.string().min(4);
const signupBody = zod.object({
    name: zod.string(),
	lastname: zod.string(),
    email: zod.string().email(),
	password: zod.string().min(4)
});
const signinBody = zod.object({
    email: zod.string().email(),
	password: zod.string().min(4)
});

const updateBody = zod.object({
    name: zod.string().optional(),
    lastname: zod.string().optional(),
    password: zod.string().min(4).optional()
})

const userrouter = express.Router();

userrouter.post("/signup",async(req,res)=>{
    const {name, lastname, email, password} = req.body;
    // const nameresponse = nameshema.safeParse(name);
    // const emailresponse = emailshema.safeParse(email);
    // const lastnameresponse = nameshema.safeParse(lastname);
    // const passwordresponse = passwordschema.safeParse(password);
    const {success} = signupBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({msg: "Invalid input data"})
    }

    const existuser = await user.findOne({email: email});
    if(existuser){
        return res.status(400).json({msg: "Email already exists"});
    }
    const hashpassword = await bcr.hash(password, 10);
    const User = await user.create({
        name: name,
        lastname: lastname,
        email: email,
        password:hashpassword,
    });

    await Acount.create({
        userID: User._id,
        balance: 1+Math.random()*10000
    })

    const token =  jwt.sign({
        email: email,
        name:name,
        userID: User._id
    } , JWT_SECRET);
    res.json({
        msg: "user created successfully",
        token: token
    })
});

userrouter.post("/signin",async(req,res)=>{
    const {email, password} = req.body;
    const {success} = signinBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({msg: "Invalid input data"})
    }

    const existuser = await user.findOne({email: email});
    if(!existuser){
        return res.status(400).json({msg: "Email not exists"});
    }
    const responsce = await bcr.compare(password, existuser.password);
    if(!responsce){
        return res.status(400).json({msg: "Password is incorrect"});
    }

    const token =  jwt.sign({
        email: email,
        userID: existuser._id
    } , JWT_SECRET);
    res.json({
        msg: "user created successfully",
        token: token
    })
});

userrouter.put("/update", authmiddileware , async(req, res) => {
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        return res.status(400).json({msg: "Invalid input data"})
    }
    if(req.body.password){
        req.body.password = await bcr.hash(req.body.password, 10);
    }
    const updatedUser = await user.updateOne({_id:req.userID}, req.body);
    res.json({msg: "User updated successfully"})
})

userrouter.get("/find", async (req, res) => {
    const filter = req.query.filter || "";
    try {
      const users = await user.find({
        $or: [
          { name: { "$regex": filter, "$options": "i" } },
          { lastname: { "$regex": filter, "$options": "i" } }
        ]
      });
  
      res.json({
        user: users.map(user => ({
          id: user._id,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
        }))
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = userrouter;