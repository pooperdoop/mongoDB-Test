import express from "express";
import Account from '../models/accounts.model.js';
import mongoose from 'mongoose';

// router for cleaner code
const router = express.Router();

router.get("/", async(req,res)=>{

    try {
        const allAccounts = await Account.find({});
        res.status(200).json({success:true, data:allAccounts});
    } catch (error) {
        res.status(500).json({success:false, message:"no Accounts"});
    }

});

router.post("/" , async (req, res) => {

    // getting info from user
    const account = req.body; 

    //checking if info is valid
    if(!account.name || !account.email || !account.password || !account.userName){
        // 400 means doesnt exist
        return res.status(400).json({success: false, message:"invalid account"});
    }

    //creating new acc if valid
    const newAccount = new Account(account);

    try{
        //saves if valid
        await newAccount.save()
        // 200 means valid or something new is created
        res.status(201).json({success: true, message:"account created", data: newAccount});
    }catch(error){
        console.error("error: " + error); 
        //500 is internal server error
        res.status(500).json({success: false, message:"something went wrong"});
    }
});

router.put("/:id", async (req, res) => {

    //dynamic id handling
    const { id } = req.params;
    const currAccount = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false, message:"no such account"});
    }

    try {
        const updatedAccount = await Account.findByIdAndUpdate(id, currAccount,{new:true});
        res.status(200).json({success:true, message:"account updated", data:updatedAccount});
    } catch (error) {
        res.status(500).json({success:false, message:"error in fetching account"});
    }

});

router.delete("/:id", async (req, res) =>{
    
    // dynamic ID handling
    const { id } = req.params;

    try {
        await Account.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "account deleted"});
    } catch (error) {
        res.status(404).json({success:false, message:"no such account"});
    }
});

export default router;