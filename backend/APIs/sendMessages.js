import expressAsyncHandler from "express-async-handler";
import Messages from '../models/modelMessage.js'

const sendMessages = expressAsyncHandler( async(req, res) => {
    const dbmessage = req.body

    Messages.create( dbmessage , (err , data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(`New message created: \n ${data}`);
        }
    });
});

export default sendMessages