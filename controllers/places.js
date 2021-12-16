const router = require('express').Router()
const db = require("../models")

router.get("/", (req, res) => {
    db.Place.find()
        .then(places => {
            res.render("places/index", {places})
        })
        .catch(err => {
            console.log("ERR: " + err)
            res.render("Error404")
        })
})

router.post("/", (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect("/places")
        })
        .catch(err => {
            console.log("ERR: " + err)
            res.render("Error404")
        })
})

router.get("/new", (req, res) => {
    res.render("places/New")
})

// SHOW
router.get("/:id", (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render("places/Show", {place})
        })
        .catch(err => {
            console.log("ERR: " + err)
            res.render("Error404")
        })
})  

// EDIT
router.get("/:id/edit", (req, res) => {
    res.send("GET edit form stub")
})

// UPDATE
router.put('/:id', (req, res) => {
    res.send("PUT /places/:id stub")
})

// DELETE
router.delete("/:id", (req, res) => {
    res.send("DELETE /places/:id stub")
})

module.exports = router