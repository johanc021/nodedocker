import { Router } from "express";
//import User from "../db/models.js"

const route = Router()


route.get("/user", async (req, res) => {
    const users = ["Hola Usuarios"]//await User.findAll()
    return res.status(200).json([users])
})

route.post("/user", (req, res) => {
    const datos = req.body
    return res.status(200).json(datos)
})



export default route