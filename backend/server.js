// const express = require('express'); <--- traditional syntax 

// modern syntax
import express from 'express';
import dotenv from "dotenv";
import { connection } from './config/db.js';
import accountRoutes from './routes/account.route.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// middleware that allows json data in the res.body
app.use(express.json());

app.use("/api/account", accountRoutes)

app.listen(port, () => {

    connection();
    console.log('testttting');
})

// qFvgvBluVEORnNaF
