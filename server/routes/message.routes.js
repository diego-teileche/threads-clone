import express from "express"
import { protectedRoute } from "../middlewares/protectedRoute.middleware.js"
import {
	getConversations,
	getMessage,
	sendMessage,
} from "../controllers/message.controller.js"

const router = express.Router()

router.get("/conversations", protectedRoute, getConversations)
router.get("/:otherUserId", protectedRoute, getMessage)
router.post("/", protectedRoute, sendMessage)

export default router
