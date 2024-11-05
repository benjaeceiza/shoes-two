
import logo from "../assets/logo-img.png"
import botonMenu from "../assets/menu.png"
import carrito from "../assets/carrito.png"
import {NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"


const NavBarMob = () => {

    return (
        <>
            <div className="nav-bar-mob">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid bg-black">
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={botonMenu} alt="" />
                        </button>
                        <NavLink to={"/"} className="navbar-brand " href="#"><img  height={100} src={logo} alt="" /></NavLink>
                        <CartWidget/>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to ={"/productos"} className="nav-link text-white Item" aria-current="page" href="#">PRODUCTOS</NavLink>
                                <NavLink to ={"/category/jordan1"} className="nav-link text-white Item" aria-current="page" href="#">JORDAN 1</NavLink>
                                <NavLink to ={"/category/jordan4"}  className="nav-link text-white Item" href="#">JORDAN 4</NavLink>
                                <NavLink to ={"/category/skateboarding"}  className="nav-link text-white Item" href="#">SKATEBOARDING</NavLink>
                                <NavLink to ={"/category/airmax"}  className="nav-link text-white Item" aria-disabled="true">AIR MAX</NavLink>
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBarMob;