import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/img/logo.png"
import store from "../redux/store"
import "../assets/css/Navbar.css"
import TitleCircle from "./TitleCircle"

export default function Navbar(props) {
    const { user, api } = store.getState()
    const nameAbr =
        user?.firstName?.charAt(0).toUpperCase() +
        user?.lastName?.charAt(0).toUpperCase()
    const firstName =
        user?.firstName?.charAt(0).toUpperCase() + user?.firstName?.slice(1)
    return (
        <div className="flex-row navbar">
            <Link to="/candidate/home" className="navbar-logo">
                <img className="logo" src={logo} alt="logo" />
                <span className="nav-peak blue">Peak </span>{" "}
                <span className="nav-people blue"> People</span>
            </Link>
            {props.children}
            <div className="nav-profile">
                <span>
                    <i className="bi bi-search icon"></i>
                </span>
                <span>
                    <i className="bi bi-envelope-fill icon"></i>
                </span>
                <TitleCircle title={nameAbr || "CT"} />
                <span className="nav-name">{firstName || "Clémentine"}</span>
            </div>
        </div>
    )
}
