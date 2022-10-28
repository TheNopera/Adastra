import Intro from "../images/HomePageImage.png"
import "../App.css"


function Home() {
    return (
        <div className="Home">
            <img className="Intro" src={Intro} alt="" />
            <div className="Home_text">
                <h1>PER <br></br>ASPERA <br></br>AD ASTRA</h1>
                <h2>Através de dificuldades para as estrelas</h2>
            </div>
            <div className="Home_Products">
                <h1>PRODUTOS</h1>
                <div className="Home_Products_Grid">
                    <h1> IN CONSTRUCTION</h1>
                </div>
            </div>
            <footer>

            </footer>

        </div>
    )
}

export default Home;