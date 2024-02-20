import express from "express"
import {
	createPost,
	getPost,
	deletePost,
	likeUnlikePost,
	replyPost,
	getFeedPosts,
	getUserPosts,
} from "../controllers/post.controller.js"
import { protectedRoute } from "../middlewares/protectedRoute.middleware.js"

const router = express.Router()

router.get("/feed", protectedRoute, getFeedPosts)
router.get("/:id", getPost)
router.get("/user/:username", getUserPosts)
router.post("/create", protectedRoute, createPost)
router.delete("/:id", protectedRoute, deletePost)
router.put("/like/:id", protectedRoute, likeUnlikePost)
router.put("/reply/:id", protectedRoute, replyPost)

export default router
