import mongoose from "mongoose";
import {DB_NAME} from './constants.js'
import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
      app.on("errror",(error)=>{
        console.log("ERR",error )
        throw error
    })
    app.listen(process.env.PORT || 800,()=>{
        console.log(`Server is running `)
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed!!! ", err)
})

/*
import express from 'express'
const app  = express();

(async()=>{
    try{
    await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("errror",(error)=>{
        console.log("ERR",error )
        throw error
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
    }catch(error){
      console.error("Error:", error)
      throw error

    }
})()
    */