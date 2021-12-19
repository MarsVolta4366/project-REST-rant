const React = require("react")

function New_Comment() {
    return (
        <form method="POST" action="">

            <label htmlFor="author">Author</label>
            <input type="text" name="author" id="author" />

            <label htmlFor="content">Comment</label>
            <input type="textarea" name="content" id="content" />

            <label htmlFor="stars">Star Rating</label>
            <input type="number" step={.5} name="stars" id="stars" />

            <label htmlFor="rant">Rant?</label>
            <input type="checkbox" name="rant" id="rant" />

            <input type="submit" value="Submit" />
        </form>
    )
}

module.exports = New_Comment