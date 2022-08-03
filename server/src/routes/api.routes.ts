import { Router } from "express";
// middleware
import { verifyAndCreateMessage } from "../middlewares/verifyAndCreateMessage.js";
// service
import { sendMessage } from "../services/api.services.js";

const router = Router();

router.post('/', verifyAndCreateMessage, sendMessage);

export default router;
