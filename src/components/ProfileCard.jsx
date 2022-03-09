import React from "react"
import userStore from "../redux/userStore"
import "../assets/css/ProfileCard.css"

export default function ProfileCard() {
    const { user } = userStore.getState()
    const firstName =
        user?.firstName?.charAt(0).toUpperCase() + user?.firstName?.slice(1)
    const workYears = 1
    const workMonths = 3
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
                    {user?.events?.length || 3} évenement
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
                        {user?.profession || "Product Designer"}
                    </h3>
                    <p className="profile-credentials">
                        <span>
                            <i className="bi bi-geo-alt-fill purple icon"></i>
                        </span>{" "}
                        <span>{user?.company || "Doctolib"}</span>
                    </p>
                    <p className="profile-credentials">{`Depuis ${workYears} an et ${workMonths} months`}</p>
                </div>
            </div>
        </div>
    )
}
