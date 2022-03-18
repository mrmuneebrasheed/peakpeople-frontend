import React from "react"
import { useSelector } from "react-redux"
import search from "../assets/img/search.svg"
import ProfileCardSmall from "../components/ProfileCardSmall"
import "./CreateAlert.css"

export default function CreateAlert() {
    // const profilesToShow = useSelector(
    //     (state) => state.userStore.profilesToDisplay
    // )
    const profilesToShow = [
        {
            id: "p1",
            firstName: "Muneeb",
            lastName: "Rasheed",
            job: "Full Stack Developer",
            role: "Manager",
            enterprise: "Peak People",
        },
        {
            id: "p1",
            firstName: "Muneeb",
            lastName: "Rasheed",
            job: "Full Stack Developer",
            role: "Manager",
            enterprise: "Peak People",
        },
    ]
    return (
        <div className="create-alert-page">
            <h2 className="blue">Alerte</h2>
            <input className="" type="text" placeholder="Titre de l'alerte" />
            <textarea
                cols="30"
                rows="10"
                placeholder="Contenu de l'alerte"
            ></textarea>
            <div className="scoring">Scoring</div>
            <h2 className="blue title">Canal de diffusion</h2>
            <p className="light-font">
                Sélectionnez un ou plusieurs canal de diffusion
            </p>
            <div className="canals">
                <input type="checkbox" name="mail" id="mail" />
                <label htmlFor="mail">Mails</label>
                <input type="checkbox" name="sms" id="sms" />
                <label htmlFor="sms">SMS</label>
                <input type="checkbox" name="linked-in" id="linked-in" />
                <label htmlFor="linked-in">LinkedIn</label>
            </div>
            <h2 className="title blue">Envoyer à</h2>
            <input
                className="search-bar"
                type="search"
                name="search"
                id="search"
                // placeholder="&#xF52A;"
                placeholder="Rechercher une personne, un poste, une équipe..."
            ></input>
            <div className="profiles flex-row">
                {profilesToShow?.map((profile) => (
                    <ProfileCardSmall
                        key={profile.id}
                        firstName={profile.firstName}
                        lastName={profile.lastName}
                        job={profile.job}
                        role={profile.role}
                        enterprise={profile.enterprise}
                    />
                ))}
            </div>
        </div>
    )
}
