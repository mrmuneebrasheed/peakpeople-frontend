import React from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/img/logo.png"
import { useDispatch, useSelector } from "react-redux"
import TitleCircle from "./TitleCircle"
import { capitalizeWord } from "../redux/useableFunctions"
import { userActions } from "../redux/userSlice"
import "./Navbar.css"

export default function Navbar({ home, children }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.userStore.user)
    const nameAbr =
        user?.firstName?.charAt(0).toUpperCase() +
        user?.lastName?.charAt(0).toUpperCase()
    const firstName = capitalizeWord(user.firstName)
    const logoutHandler = () => {
        dispatch(userActions.logout())
        navigate("/")
    }
    return (
        <div className="flex-row navbar">
            <Link to={`/${home}/home`} className="navbar-logo">
                <img className="logo" src={logo} alt="logo" />
                <span translate="no" className="nav-peak blue">
                    Peak{" "}
                </span>{" "}
                <span translate="no" className="nav-people blue">
                    {" "}
                    People
                </span>
            </Link>
            <div className="nav-links flex-row">{children}</div>
            <div className="nav-profile">
                <span>
                    <i className="bi bi-search icon"></i>
                </span>
                <span>
                    <i className="bi bi-envelope-fill icon"></i>
                </span>
                <TitleCircle title={nameAbr || ""} />
                <span className="nav-name">{firstName || "\n \n \n \n "}</span>
                <span onClick={logoutHandler} className="logout-button link">
                    Log out
                </span>
            </div>
            <div></div>
        </div>
    )
}
