import React from "react"
import { Link } from "react-router-dom"
import "./Navlink.css"

export default function Navlink({ link, title }) {
    return (
        <Link className="nav-link" to={link}>
            {title}
        </Link>
    )
}
