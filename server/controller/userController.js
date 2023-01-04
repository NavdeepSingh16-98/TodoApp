const User = require("../models/User");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

//singup
exports.createUserController = async (req,res)=>{

    try{

        const {name,email,password} = req.body;

        const user = await User.findOne({email});

        if(user){
            throw new Error("Email already exists");
        }

        const salt = await bcrypt.genSalt(10);

        const encryptedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create({
            name,
            email,
            password:encryptedPassword
        })

        const data = {
            id:newUser._id
        }

        const token = await jwt.sign(data,'secret',{ expiresIn: '1h' });

        const createdUser = newUser;

        createdUser.password = undefined;

        res.status(200).cookie('token',token,{
            expires:new Date(Date.now()+3*24*60*60*1000),
            httpOnly:true
        }).json({
            success:true,
            token,
            createdUser
        })

    }catch(err){

res.status(401).json({
    success:false,
    message:err.message
})
    }
}

//login User

exports.loginUserController = async (req,res) =>{

    try{
const {email,password} = req.body;
const isEmailExists = await user.findOne({email});

if(!isEmailExists){
throw new Error("no such email found please sign up")
}

const user = await User.findOne({email});

const comparePassword = await bcrypt.compare(password,user.password);

if(!comparePassword){
    throw new Error("wrong password");

}

const data = {
    id:user._id
}

const token = await jwt.sign(data,'secret',{ expiresIn: '1h' })

user.password = undefined;

//res.status(201)

    }catch(err){

    }
}