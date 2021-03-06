import React from "react"
import PeakLogo from "../assets/img/logo.png"
import { useNavigate } from "react-router-dom"
import moment from "moment"
import "./JobCard.css"

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
    manager,
    navigateLink,
}) {
    const navigate = useNavigate()
    const navigateToJob = () => {
        navigate(navigateLink + id)
    }
    const fromNow = moment(dateCreated).fromNow()
    const fromNowArray = fromNow.split(" ")
    if (fromNowArray[1] === "months") fromNowArray[1] = "mois"
    if (fromNowArray[1] === "day") fromNowArray[1] = "jour"
    if (fromNowArray[1] === "days") fromNowArray[1] = "jours"
    if (fromNowArray[1] === "hour") fromNowArray[1] = "heure"
    if (fromNowArray[1] === "hours") fromNowArray[1] = "heures"
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
                {!manager && (
                    <div>
                        <i className="bi bi-geo-alt-fill blue icon"></i>
                        <span className="grey">{enterprise}</span>
                    </div>
                )}
                {!manager && (
                    <div className="grey">{`${location} • ${contractType}`}</div>
                )}
            </div>
            <div className="analysis"></div>
            <div className="information flex-column justify-center">
                <span className="grey">{`Publié il y a ${fromNowArray[0]} ${fromNowArray[1]}`}</span>
                <span className="candidates">{`${candidates} candidats`}</span>
            </div>
            {!manager && (
                <div className="flex-column justify-center">
                    <span className="pink-button apply-button">Postuler</span>
                </div>
            )}
        </div>
    )
}
