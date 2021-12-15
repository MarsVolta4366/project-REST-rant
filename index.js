const express = require("express")
require("dotenv").config()
const methodOverride = require("method-override")

const app = express()

app.set('views', __dirname + '/views')
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use("/places", require("./controllers/places.js"))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("Home")
})

app.get("*", (req, res) => {
    res.render("Error404")
})

app.listen(process.env.PORT)

// npm install react@^16.0.0 react-dom@^16.0.0
