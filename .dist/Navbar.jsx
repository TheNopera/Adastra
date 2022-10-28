import "./ComponentsStyles/Navbar.css"
import search from "../images/SearchIcon.png"
import user from "../images/UserIcon.png"
import shopping from "../images/ShoppingIcon.png"

const Navbar = () => {
    return (
        <div className="NavBar">
            <div className="NavBar_Container">
                <div className="NavBar_LeftItem">
                    <li>HOMEM</li>
                    <li>MULHER</li>
                    <li>ACESSÓRIOS</li>
                </div>
                <div className="NavBar_Logo">
                    <h1>ADASTRA</h1>
                </div>
                <div className="NavBar_Icons">
                    <img src={search} alt="" />
                    <img src={user} alt="" />
                    <img src={shopping} alt="" />
                </div>
            </div>
        </div>
    )
};

export default Navbar;