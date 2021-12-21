const React = require("react")
const Def = require("../Default.jsx")

function Edit_Form({place}) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form action={`/places/${place.id}?_method=PUT`} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" type="text" name="name" id="name" value={place.name} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" value={place.pic} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" name="city" id="city" value={place.city} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" type="text" name="state" id="state" value={place.state} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" type="text" name="cuisines" id="cuisines" value={place.cuisines} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Year Founded</label>
                        <input className="form-control" type="text" name="founded" id="founded" value={place.founded} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Update Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = Edit_Form