import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./DropdownLink.css"

export default function DropdownLink({ title, linksArray }) {
    const [isHidden, setIsHidden] = useState(true)
    return (
        <div
            onMouseEnter={() => setIsHidden(false)}
            onMouseLeave={() => setIsHidden(true)}
            className="drop-down"
        >
            <span className="title nav-link">{title} &nbsp; &#9660;</span>
            <div className={`drop-down-links ${isHidden ? "hidden" : "show"}`}>
                {linksArray?.map((link) => (
                    <Link
                        key={Math.random()}
                        to={link.path}
                        className="drop-down-link nav-link"
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}
