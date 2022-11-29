// here we will connect our app with database
import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler";
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
})

export default config;