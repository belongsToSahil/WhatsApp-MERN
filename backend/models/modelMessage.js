import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
Name : String,
Message : String,
Received : Boolean,
});

const message = mongoose.model("message" , messageSchema , "messages")

export default message;