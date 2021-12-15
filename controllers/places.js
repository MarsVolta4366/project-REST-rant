const router = require('express').Router()
const places = require("../models/places.js")

router.get("/", (req, res) => {
    res.render("places/index", { places })
})

router.post("/", (req, res) => {
    console.log(req.body)

    if(!req.body.pic) {
        // Default image if none provided
        req.body.pic = "http://placekitten.com/200/200"
    }
    if(!req.body.city) {
        req.body.city = "Anytown"
    }
    if(!req.body.state) {
        req.body.state = "USA"
    }
    places.push(req.body)
    res.redirect("/places")
})

router.get("/new", (req, res) => {
    res.render("places/New")
})

// SHOW
router.get("/:id", (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render("Error404")
    } else if(!places[id]) {
        res.render("Error404")
    } else {
        res.render("places/Show", {place: places[id], id})
    }
})  

// EDIT
router.get("/:id/edit", (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render("Error404")
    } else if(!places[id]) {
        res.render("Error404")
    } else {
        res.render('places/edit', { place: places[id], id: req.params.id })
    }
})

// UPDATE
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('Error404')
    }
    else if (!places[id]) {
        res.render('Error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})

// DELETE
router.delete("/:id", (req, res) => {
    // let id = Number(req.params.id)
    // if(isNaN(id)) {
    //     res.render("Error404")
    // } else if(!places[id]) {
    //     res.render("Error404")
    // } else {
    //     places.splice(id, 1)
    //     res.redirect("/places")
    // }
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render("Error404")
    } else if(!places[id]) {
        res.render("Error404")
    } else {
        // res.send("STUB DELETE places/:id")
        places.splice(id, 1)
        res.redirect("/places")
    }

})

module.exports = router