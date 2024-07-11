import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    guard:{
        type:String
    }
}, {timestamps:true});

const Role = mongoose.model("Role", RoleSchema);
export default Role;