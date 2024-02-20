import express from "express"
import {
	signupUser,
	loginUser,
	logoutUser,
	followUnfollowUser,
	updateUser,
	getUserProfile,
	getSuggestedUsers,
} from "../controllers/user.controller.js"
import { protectedRoute } from "../middlewares/protectedRoute.middleware.js"

const router = express.Router()

router.get("/profile/:query", getUserProfile)
router.get("/suggested", protectedRoute, getSuggestedUsers)
router.post("/signup", signupUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.post("/follow/:id", protectedRoute, followUnfollowUser)
router.put("/update/:id", protectedRoute, updateUser)

export default router
