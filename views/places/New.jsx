const React = require("react")
const Def = require("../Default")

function New_Form() {
    return (
        <Def>
            <main>
                <h1>Add a new place</h1>
                <form action="/places" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" type="text" name="name" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" name="city" id="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" type="text" name="state" id="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" type="text" name="cuisines" id="cuisines" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = New_Form