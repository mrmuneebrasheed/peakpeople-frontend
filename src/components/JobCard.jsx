import React from "react"
import PeakLogo from "../assets/img/logo.png"
import "../assets/css/JobCard.css"
import { useNavigate } from "react-router-dom"
import moment from "moment"

export default function JobCard({
    id,
    title,
    enterprise,
    location,
    contractType,
    logo,
    dateCreated,
    startingDate,
    candidates,
}) {
    const navigate = useNavigate()
    const navigateToJob = () => {
        navigate("/candidate/job/" + id)
    }
    const fromNow = moment(dateCreated).fromNow()
    const fromNowArray = fromNow.split(" ")
    if (fromNowArray[1] === "months") fromNowArray[1] = "mois"
    if (fromNowArray[1] === "day") fromNowArray[1] = "jour"
    if (fromNowArray[1] === "days") fromNowArray[1] = "jours"
    if (fromNowArray[1] === "years") fromNowArray[1] = "année"
    return (
        <div className="job-card flex-row" onClick={navigateToJob}>
            <div className="logo">
                <img
                    className="logo-image"
                    src={logo ? logo : PeakLogo}
                    alt="logo  "
                />
            </div>
            <div className="flex-column justify-between title-box">
                <span className="title blue link">{title}</span>
                <div>
                    <i className="bi bi-geo-alt-fill blue icon"></i>
                    <span className="grey">{enterprise}</span>
                </div>
                <div className="grey">{`${location} • ${contractType}`}</div>
            </div>
            <div className="analysis"></div>
            <div className="information flex-column justify-center">
                <span className="grey">{`Publié il y a ${fromNowArray[0]} ${fromNowArray[1]}`}</span>
                <span className="candidates">{`${candidates} candidats`}</span>
            </div>
            <div className="flex-column justify-center">
                <span className="pink-button apply-button">Postuler</span>
            </div>
        </div>
    )
}
