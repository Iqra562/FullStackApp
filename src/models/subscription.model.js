import mongoose, { mongo, Schema } from "mongoose";

const subscriptionSchema  = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId, //	The user who follows/subscribes
        ref:"User"
    },
    channel :{
        type:Schema.Types.ObjectId, // the user who is being followed (creator)
        ref:"User"
    }
},{
    timestamps:true
})

export const Subscription = mongoose.model("Subscription",subscriptionSchema)