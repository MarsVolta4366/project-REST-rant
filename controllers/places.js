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
    if(req.body.pic === "") {
        req.body.pic = undefined
    }
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
        .populate("comments")
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
    db.Place.findById(req.params.id)
        .then(place => {
            res.render("places/edit", {place})
        })
        .catch(error => {
            res.render("Error404")
        })
})

// UPDATE
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(error => {
            res.render("Error404")
        })
})

// DELETE
router.delete("/:id", (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(place => {
            res.redirect("/places")
        })
        .catch(error => {
            res.render("Error404")
        })
})

router.post("/:id/comment", (req, res) => {
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                })
                .catch(err => {
                    res.render("Error404")
                })
        })
        .catch(err => {
            res.render("Error404")
        })
})

module.exports = router