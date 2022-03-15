import React from "react"
import { useSelector } from "react-redux"
import { capitalizeWord } from "../redux/useableFunctions"
import moment from "moment"
import "./ProfileCard.css"

export default function ProfileCard() {
    const user = useSelector((state) => state.userStore.user)
    console.log(user)
    const firstName = capitalizeWord(user.firstName)
    const workYears =
        moment(user.dateCreated).get("year") - new Date().getFullYear()
    const workMonths =
        moment(user.dateCreated).get("month") - new Date().getMonth()
    const startYear = moment(user.dateCreated).get("year")
    return (
        <div className="profile-card">
            <div>
                <span className="profile-card-bonjour">Bonjour, </span>{" "}
                <span className="profile-card-name">
                    {firstName || "Clémentine"}
                </span>
            </div>
            <p>
                Vous avez{" "}
                <span className="pink">
                    {user?.events?.length || 0} évenement
                </span>{" "}
                aujourd'hui.
            </p>
            <div className="edit-icon-line">
                <span className="edit-icon">
                    <i className="bi bi-pencil icon"></i>
                </span>
            </div>
            <div className="profile-card-profile">
                <div className="profile-card-image">
                    <img src="" alt="" />
                </div>
                <div>
                    <h3 className="profile-credential">
                        {user?.job || "Product Designer"}
                    </h3>
                    <p className="profile-credentials">
                        <span>
                            <i className="bi bi-geo-alt-fill purple icon"></i>
                        </span>{" "}
                        <span>{user?.enterprise || "Doctolib"}</span>
                    </p>
                    <p className="profile-credentials">{`Depuis ${
                        workYears ? workYears + " an et " : ""
                    } ${workMonths ? workMonths + " mois" : ""} ${
                        workMonths && workYears ? "" : startYear
                    }`}</p>
                </div>
            </div>
        </div>
    )
}
