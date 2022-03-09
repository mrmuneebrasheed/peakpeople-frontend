import React from "react"
import PeakLogo from "../assets/img/logo.png"
import "../assets/css/JobCard.css"

export default function JobCard({
    title,
    enterprise,
    location,
    contractType,
    logo,
    dateCreated,
    candidates,
}) {
    const days = new Date().getDate() - dateCreated.getDate()
    return (
        <div className="job-card flex-row">
            <div className="logo">
                <img
                    className="logo-image"
                    src={logo ? logo : PeakLogo}
                    alt="logo  "
                />
            </div>
            <div className="flex-column justify-between title-box">
                <span className="title blue">{title}</span>
                <div>
                    <i className="bi bi-geo-alt-fill blue icon"></i>
                    <span className="grey">{enterprise}</span>
                </div>
                <div className="grey">{`${location} • ${contractType}`}</div>
            </div>
            <div className="analysis"></div>
            <div className="information flex-column justify-center">
                <span className="grey">{`Publié il y a ${days || 1} ${
                    days > 1 ? "jours" : "jour"
                }`}</span>
                <span className="candidates">{`${candidates} candidats`}</span>
            </div>
            <div className="flex-column justify-center">
                <span className="pink-button apply-button">Postuler</span>
            </div>
        </div>
    )
}
