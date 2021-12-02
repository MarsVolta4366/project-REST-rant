const express = require("express")
require("dotenv").config()

const app = express()

app.get("/", (req, res) => {
    res.send("Hi")
})

app.get("*", (req, res) => {
    res.status(404).send(`<h1>404 Page</h1>`)
})

app.listen(process.env.PORT)