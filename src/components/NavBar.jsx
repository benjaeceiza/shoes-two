
import logo from "../assets/logo-img.png"
import CartWidget from "./CartWidget";
import {NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className="ContenedorBarra">
                <NavLink to={"/"} ><img className="Logo" src={logo} alt="Logo" /></NavLink>
                <ul className="Lista">
                    <NavLink className="Enlace" to={"/productos"}><li className="Item">PRODUCTOS</li></NavLink>
                    <NavLink className="Enlace" to={"/category/jordan1"}><li className="Item">JORDAN 1</li></NavLink>
                    <NavLink className="Enlace" to={"/category/jordan4"}><li className="Item">JORDAN 4</li></NavLink>
                    <NavLink className="Enlace" to={"/category/skateboarding"}><li className="Item">SKATEBOARDING</li></NavLink>
                    <NavLink className="Enlace" to={"/category/airmax"}><li className="Item">AIR MAX</li></NavLink>
                    <li className="Item">{<CartWidget />}</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar