// On part six
const router = require('express').Router()
var bodyParser = require('body-parser')

// create application/json parser
//var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/new", (req, res) => {
    res.render("places/New")
})

router.get("/", (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thaiImage.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'images/catCafeImage.jpg'
    }]
    res.render("places/index", { places })
})

router.post("/", urlencodedParser, (req, res) => {
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { placeName: 'test', pic: '', city: 'test', state: 'test', cuisines: 'test' }

    console.log(obj); // { placeName: 'test', pic: '', city: 'test', state: 'test', cuisines: 'test' }
    res.send("POST /places")
})

module.exports = router