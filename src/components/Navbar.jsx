import React from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/img/logo.png"
import { useSelector } from "react-redux"
import "../assets/css/Navbar.css"
import TitleCircle from "./TitleCircle"
import { capitalizeWord } from "../redux/useableFunctions"

export default function Navbar(props) {
    const navigate = useNavigate()
    const user = useSelector((state) => state.userStore.user)
    const nameAbr =
        user?.firstName?.charAt(0).toUpperCase() +
        user?.lastName?.charAt(0).toUpperCase()
    const firstName = capitalizeWord(user.firstName)
    const logoutHandler = () => {
        window.localStorage.setItem("userID", "")
        navigate("/")
    }
    return (
        <div className="flex-row navbar">
            <Link to="/candidate/home" className="navbar-logo">
                <img className="logo" src={logo} alt="logo" />
                <span translate="no" className="nav-peak blue">
                    Peak{" "}
                </span>{" "}
                <span translate="no" className="nav-people blue">
                    {" "}
                    People
                </span>
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
                <span onClick={logoutHandler} className="logout-button link">
                    Log out
                </span>
            </div>
            <div></div>
        </div>
    )
}
