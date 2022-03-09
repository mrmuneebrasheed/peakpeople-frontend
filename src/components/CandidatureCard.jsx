import React from "react"
import PeakLogo from "../assets/img/logo.png"
import "../assets/css/CandidatureCard.css"

export default function CandidatureCard({
    title,
    entreprise,
    date,
    status,
    logo,
    small,
}) {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const capitalizedStatus = status.slice(0, 1).toUpperCase() + status.slice(1)
    return (
        <div className="bg-white border-rounded card candidature-card">
            <div className={`${small ? "flex-column" : "flex-row"}`}>
                {!small && (
                    <div className="logo">
                        <img
                            className="logo-image"
                            src={logo ? logo : PeakLogo}
                        ></img>
                    </div>
                )}
                <div className="title-box flex-column justify-center">
                    <span className="title link blue">
                        {title || "Peak People"}
                    </span>
                    <div className="entreprise">
                        <i className="bi bi-geo-alt-fill icon blue"></i>
                        <span className="grey">{entreprise}</span>
                    </div>
                </div>

                <div className="flex-row justify-between align-center status">
                    <div className="date grey">{`Soumise le ${day}/${month}/${year}`}</div>
                    <div>
                        <span className={`status ${status}`}>
                            {capitalizedStatus}
                        </span>
                    </div>
                </div>
                {!small && (
                    <div className="icons flex-column justify-center align-end">
                        <span className="pink">
                            <i className="bi bi-envelope-fill icon blue"></i>
                            <span className="icon"> &nbsp; &#10006;</span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}
