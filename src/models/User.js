const mongoose=require('mongoose');
const bcrypt=require("bcryptjs")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
    require:true,
    }
},{timestamps:true,})


userSchema.methods.comparePassword=async function(userPassword){
    return bcrypt.compare(userPassword,this.password)
}

const User=mongoose.model("user",userSchema);

module.exports=User;