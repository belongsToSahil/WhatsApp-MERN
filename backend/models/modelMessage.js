import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
message : String,
});

const message = mongoose.model("message" , messageSchema , "messages")

export default message;