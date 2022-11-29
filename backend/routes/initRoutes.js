import express from 'express'
import sendMessages from '../APIs/sendMessages.js';
import findMessages from '../APIs/findMessages.js';
const router = express.Router();

router.route("/messages/new").put(sendMessages);
router.route("/messages/find").get(findMessages);




export default router;