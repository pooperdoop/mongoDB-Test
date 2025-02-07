// const express = require('express'); <--- traditional syntax 

// modern syntax
import express from 'express';
import dotenv from "dotenv";
import { connection } from './config/db.js';

dotenv.config();

const app = express();

app.get("/" ,(req, res) => {

    res.send("server is ready");
});

app.listen(5000, () => {
    
    connection();
    console.log('testttting');
})

// qFvgvBluVEORnNaF
