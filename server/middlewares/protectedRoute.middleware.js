import User from "../models/user.model.js"
import jwt from "jsonwebtoken"

export const protectedRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt

		if (!token) return res.status(401).json({ error: "Unauthorized" })

		const decoded = jwt.verify(token, process.env.JWT_SECRET)

		const user = await User.findById(decoded.userId).select("-password")

		req.user = user

		next()
	} catch (error) {
		res.status(500).json({ error: error.message })
		console.log("Error in protectedRoute:", error.message)
	}
}
