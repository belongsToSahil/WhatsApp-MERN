// here we will connect our app with database
import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler";
import Pusher from "pusher";

import dotenv from "dotenv"
dotenv.config()

const config = expressAsyncHandler(async () => {
  try {
    const DB = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: "MyWhatsApp",
    })
    console.log("Db connected Succesfully")
  }
  catch(err){
    console.log(err)
    process.exit(1)
  } 

const db =  await mongoose.connection;
  db.once("open" ,  async () => {
    console.log("db connected")
});

const msgCollection = await db.collection("messages");
const changestream =  await msgCollection.watch();

changestream.on('change' , (change) => {
  console.log( "A change Occured :" ,change);
 
  if(change.operationType === 'insert'){
    const messageDetails = change.fullDocument;
    pusher.trigger("messages", "inserted", {
       name : messageDetails.name
    });
  }
  else{
    console.log("Error triggering Pusher");
  }

});

})

const pusher = new Pusher({
  appId: "1515706",
  key: "0b752c06613f4bbf6356",
  secret: "f2e4c4cc84678f540924",
  cluster: "ap2",
  useTLS: true
});




export default config;