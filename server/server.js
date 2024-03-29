import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js"
import postRoutes from "./routes/post.routes.js"
import messageRoutes from "./routes/message.routes.js"
import { v2 as cloudinary } from "cloudinary"
import { app, server } from "./socket/socket.js"

dotenv.config()

connectDB()

const PORT = process.env.PORT || 5000

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Middlewares
app.use(express.json({ limit: "50mb" })) // to parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })) // to parse form data in the req.body
app.use(cookieParser())

// Routes
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/messages", messageRoutes)

server.listen(PORT, () => console.log(`Server on Port: ${PORT}`))
