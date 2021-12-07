const React = require("react")
const Def = require("./Default")

function Home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/computerCode.jpg" alt="Computer screen with code"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@lucabravo">Luca Bravo</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home