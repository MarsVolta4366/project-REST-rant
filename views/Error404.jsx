const React = require("react")
const Def = require("./Default")

function Error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/spooky.jpg" alt="Scary skeleton" />
                </div>
            </main>
        </Def>
    )
}

module.exports = Error404