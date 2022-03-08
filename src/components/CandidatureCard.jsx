import React from "react"
import "../assets/css/CandidatureCard.css"

export default function CandidatureCard({
    title,
    entreprise,
    date,
    status,
    small,
}) {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const capitalizedStatus = status.slice(0, 1).toUpperCase() + status.slice(1)
    return (
        <div className="bg-white border-rounded card flex-row candidature-card">
            <div className={`${small ? "flex-column" : "flex-row"}`}>
                <h4 className="link blue">{title || "Peak People"}</h4>
                <div className="entreprise">
                    <i className="bi bi-geo-alt-fill icon blue"></i>
                    <span className="grey">{entreprise}</span>
                </div>
                <div className="flex-row justify-between">
                    <div className="date grey">{`Soumise le ${day}/${month}/${year}`}</div>
                    <span className={`status ${status}`}>
                        {capitalizedStatus}
                    </span>
                </div>
            </div>
        </div>
    )
}
