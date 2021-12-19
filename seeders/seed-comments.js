const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place
    let place = await db.Place.findOne({ name: 'Drews' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)
    
    // Exit the program
    process.exit()
}

seed()