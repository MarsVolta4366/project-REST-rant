const router = require('express').Router()
const db = require("../models")

router.get("/", (req, res) => {
    // res.render("places/index", { places })
    db.Place.find()
        .then(places => {
            res.render("places/index", {places})
        })
        .catch(err => {
            console.log(err)
            res.render("Error404")
        })
})

router.post("/", (req, res) => {
    // console.log(req.body)

    // if(!req.body.pic) {
    //     // Default image if none provided
    //     req.body.pic = "http://placekitten.com/200/200"
    // }
    // if(!req.body.city) {
    //     req.body.city = "Anytown"
    // }
    // if(!req.body.state) {
    //     req.body.state = "USA"
    // }
    // places.push(req.body)
    // res.redirect("/places")

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
    // let id = Number(req.params.id)
    // if(isNaN(id)) {
    //     res.render("Error404")
    // } else if(!places[id]) {
    //     res.render("Error404")
    // } else {
    //     res.render("places/Show", {place: places[id], id})
    // }

    res.send("GET /places/:id stub")
})  

// EDIT
router.get("/:id/edit", (req, res) => {
    // let id = Number(req.params.id)
    // if(isNaN(id)) {
    //     res.render("Error404")
    // } else if(!places[id]) {
    //     res.render("Error404")
    // } else {
    //     res.render('places/edit', { place: places[id], id: req.params.id })
    // }
    res.send("GET edit form stub")
})

// UPDATE
router.put('/:id', (req, res) => {
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.render('Error404')
    // }
    // else if (!places[id]) {
    //     res.render('Error404')
    // }
    // else {
    //     // Dig into req.body and make sure data is valid
    //     if (!req.body.pic) {
    //         // Default image if one is not provided
    //         req.body.pic = 'http://placekitten.com/400/400'
    //     }
    //     if (!req.body.city) {
    //         req.body.city = 'Anytown'
    //     }
    //     if (!req.body.state) {
    //         req.body.state = 'USA'
    //     }
  
    //     // Save the new data into places[id]
    //     places[id] = req.body
    //     res.redirect(`/places/${id}`)
    // }

    res.send("PUT /places/:id stub")
})

// DELETE
router.delete("/:id", (req, res) => {
    // let id = Number(req.params.id)
    // if(isNaN(id)) {
    //     res.render("Error404")
    // } else if(!places[id]) {
    //     res.render("Error404")
    // } else {
    //     // res.send("STUB DELETE places/:id")
    //     places.splice(id, 1)
    //     res.redirect("/places")
    // }
    res.send("DELETE /places/:id stub")
})

module.exports = router