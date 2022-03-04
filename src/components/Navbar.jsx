import React from "react"
import logo from "../assets/img/logo.png"
import "../assets/css/Navbar.css"

export default function Navbar(props) {
    return (
        <div className="flex-row navbar">
            <div className="navbar-logo">
                <img className="logo" src={logo} alt="logo" />
                <span className="nav-peak blue">Peak </span>
                <span className="nav-people blue">&nbsp; People</span>
            </div>
            {props.children}
        </div>
    )
}
