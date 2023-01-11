import expressAsyncHandler from "express-async-handler";
import Messages from '../models/modelMessage.js'

const findMessages = expressAsyncHandler( async(req, res) => {

    Messages.find((err , data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
            console.log("Your messages Successfully sended")
        }
    });
});

export default findMessages;