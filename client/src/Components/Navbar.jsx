import "./ComponentsStyles/Navbar.css"
import search from "../images/SearchIcon.png"
import user from "../images/UserIcon.png"
import shopping from "../images/ShoppingIcon.png"
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="NavBar">
            <Link to=""><label>ADASTRA</label></Link> 
            <div className="NavBar_LeftItem">
                <li>HOMEM</li>
                <li>MULHER</li>
                <li>ACESSÓRIOS</li>
            </div>
            
            <div className="NavBar_Icons">
                <a><img src={search} alt="" /></a>
                <img src={user} alt="" />
                <img src={shopping} alt="" />
            </div>
        </div>
    )
};

export default Navbar;