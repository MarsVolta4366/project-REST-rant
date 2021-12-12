// AT PARAGRAPH ABOVE PART SIX
const router = require('express').Router()
var bodyParser = require('body-parser')
const { route } = require('express/lib/application')
const places = require("../models/places.js")

// create application/json parser
//var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/new", (req, res) => {
    res.render("places/New")
})

// EDIT
router.get("/:id/edit", (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render("Error404")
    } else if(!places[id]) {
        res.render("Error404")
    } else {
        res.render("places/edit", {place: places[id], id})
    }
    // res.send("Edit page")
})

router.get("/", (req, res) => {
    // let places = [{
    //     name: 'H-Thai-ML',
    //     city: 'Seattle',
    //     state: 'WA',
    //     cuisines: 'Thai, Pan-Asian',
    //     pic: '/images/thaiImage.jpg'
    // }, {
    //     name: 'Coding Cat Cafe',
    //     city: 'Phoenix',
    //     state: 'AZ',
    //     cuisines: 'Coffee, Bakery',
    //     pic: 'images/catCafeImage.jpg'
    // }]
    res.render("places/index", { places })
})

router.post("/", urlencodedParser, (req, res) => {
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { placeName: 'test', pic: '', city: 'test', state: 'test', cuisines: 'test' }

    console.log(obj); // { placeName: 'test', pic: '', city: 'test', state: 'test', cuisines: 'test' }

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

router.route("/:id")
    .get((req, res) => {
        let id = Number(req.params.id)
        if(isNaN(id)) {
            res.render("Error404")
        } else if(!places[id]) {
            res.render("Error404")
        } else {
            res.render("places/Show", {place: places[id], id})
        }
    })
    .put((req, res) => {
        let id = Number(req.params.id)
        if (isNaN(id)) {
            res.render('error404')
        }
        else if (!places[id]) {
            res.render('error404')
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
    .delete((req, res) => {
        // let id = Number(req.params.id)
        // if(isNaN(id)) {
        //     res.render("Error404")
        // } else if(!places[id]) {
        //     res.render("Error404")
        // } else {
        //     places.splice(id, 1)
        //     res.redirect("/places")
        // }
        res.send("STUB DELETE places/:id")

    })

// Show route
// router.get("/:id", (req, res) => {
//     let id = Number(req.params.id)
//     if(isNaN(id)) {
//         res.render("Error404")
//     } else if(!places[id]) {
//         res.render("Error404")
//     } else {
//         res.render("places/Show", {place: places[id], id})
//     }
// })

// PUT route
// router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//             // Default image if one is not provided
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'USA'
//         }
  
//         // Save the new data into places[id]
//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
// })

// router.delete("/:id", (req, res) => {
//     let id = Number(req.params.id)
//     if(isNaN(id)) {
//         res.render("Error404")
//     } else if(!places[id]) {
//         res.render("Error404")
//     } else {
//         // places.splice(id, 1)
//         // res.redirect("/places")
//         res.send("STUB DELETE places/:id")
//     }
// })

module.exports = router