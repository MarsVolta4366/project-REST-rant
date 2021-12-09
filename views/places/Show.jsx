const React = require("react")
const Def = require("../Default")

function Show({place, id}) {
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <p>{place.cuisines}</p>
                <img src={place.pic} alt={place.name} />
                <p>Located in {place.city}, {place.state}</p>
                <a href={`/places/${id}/edit`} className="btn btn-warning">Edit</a>
                <form action={`/places/${id}?_method=DELETE`} method="POST">
                    <input type="submit" className="btn btn-danger" value="Delete" />
                </form>
                <div>
                    <h2>Rating</h2>
                    <p>Currently unrated</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show