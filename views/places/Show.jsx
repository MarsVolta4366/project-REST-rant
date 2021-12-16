const React = require("react")
const Def = require("../Default")

function Show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <p>Serving {data.place.cuisines}</p>
                <img src={data.place.pic} alt={data.place.name} />
                <p>Located in {data.place.city}, {data.place.state}</p>
                <h2>Description</h2>
                <p>{data.place.showEstablished()}</p>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>

                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">Delete</button>
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