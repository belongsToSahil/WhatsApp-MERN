import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
name : String,
});

const message = mongoose.model("message" , messageSchema , "messages")

export default message;