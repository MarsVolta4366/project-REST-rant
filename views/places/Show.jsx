const React = require("react")
const Def = require("../Default")

function Show(data) {
    let comments = (
        <p className="inactive">No comments yet!</p>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if(data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((total, comment) => {
            return total + comment.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ""
        for(let i = 0; i < averageRating; i++) {
            stars += "⭐️"
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border" key={c.id}>
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
    }
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <p>Serving {data.place.cuisines}</p>
                <img src={data.place.pic} alt={data.place.name} />
                <p>Located in {data.place.city}, {data.place.state}</p>
                <h2>Description</h2>
                <p>{data.place.showEstablished()}</p>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>

                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
                <div>
                    <h2>Rating</h2>
                    {rating}
                </div>
                <div>
                    <h2>Comments</h2>
                    {comments}
                </div>
                <div className="form-group">
                    <h2>Got Your Own Rant or Rave?</h2>
                    <form method="POST" action={`/places/${data.place.id}/comment`}>

                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" id="author" className="form-control" />

                        <label htmlFor="content">Comment</label>
                        <input type="textarea" name="content" id="content" className="form-control" />

                        <label htmlFor="stars">Star Rating</label>
                        <input type="number" step={.5} max={5} name="stars" id="stars" />

                        <label htmlFor="rant">Rant?</label>
                        <input type="checkbox" name="rant" id="rant" />

                        <input type="submit" value="Submit" />
                         
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show