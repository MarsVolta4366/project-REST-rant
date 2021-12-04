const express = require("express")
require("dotenv").config()

const app = express()

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

app.use("/places", require("./controllers/places"))

app.get("/", (req, res) => {
    // res.send("Hi")
    res.render("Home")
})

app.get("*", (req, res) => {
    res.status(404).send(`<h1>404 Page</h1>`)
})

app.listen(process.env.PORT)

// npm install react@^16.0.0 react-dom@^16.0.0
