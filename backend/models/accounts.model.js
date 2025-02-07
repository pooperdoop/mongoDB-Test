import mongoose from "mongoose";

// account schema
const accountSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
},{
    timestamps:true
});

const Account = mongoose.model('Account', accountSchema);
//mongodb renames the collection to accounts idk why mongodb just does that
export default Account;