import express from "express";
import dotenv from "dotenv"
import route from "./routes/index.js";

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())


app.use("/api", route)


app.use('/', (req, res) => {
    res.send("holaa")
})

const server = app.listen(PORT, () => { console.log(`esta conectado en http://localhost:${PORT}`) })