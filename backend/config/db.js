import mongoose from "mongoose";


export const connection = async () =>{
    try{
        //get mongoDB from .env
        const con = await mongoose.connect(process.env.ATLAS_URI);
        console.log("connected bitchjhhh")

    }catch(error){
        console.log(error)
        process.exit(1) // 1 means failure, 0 is success
    }
}