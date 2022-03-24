import React from "react"
import logo from "../assets/img/logo.png"
import { useNavigate } from "react-router-dom"
import moment from "moment"
import "./CandidatureProfile.css"

export default function CandidatureProfile({
    candidate,
    date,
    navigateLink,
    candidatureID,
}) {
    const navigate = useNavigate()
    const dateToDisplay = moment(date).format("DD/MM/YY")
    return (
        <div
            onClick={() => navigate(navigateLink + candidatureID)}
            className="candidature-profile flex-row"
        >
            <div className="logo flex-column">
                <img src={logo} alt="logo" className="image" />
            </div>
            <div className="flex-column">
                <div className="name">{`${candidate.firstName} ${candidate.lastName}`}</div>
                <div className="date">{`Interne: ${dateToDisplay}`}</div>
                <div className="date">n. Commentaire</div>
                <div className="date">n. Réponse</div>
            </div>
        </div>
    )
}
