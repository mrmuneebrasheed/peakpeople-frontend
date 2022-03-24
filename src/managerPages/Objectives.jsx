import React, { useState } from "react"
import Calender from "../components/Calender"
import ProfileCardSmall from "../components/ProfileCardSmall"
import "./Objectives.css"

export default function Objectives() {
    const [objectives, setObjectives] = useState("")
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
            id: "p2",
            firstName: "Muneeb",
            lastName: "Rasheed",
            job: "Full Stack Developer",
            role: "Manager",
            enterprise: "Peak People",
        },
    ]
    return (
        <div className="objectives-page">
            <h2 className="pink text-center">Envoyer un objectif</h2>
            <input
                className="title-input"
                type="text"
                id="objective-title"
                placeholder="Titre d'Objectif"
            />
            <div className="objective-type flex-row justify-evenly align-center">
                <span className="label pink">Type d'Objectif</span>
                <select className="filter-option" id="objective-type">
                    <option className="filter-option" value="analytics">
                        Analytics
                    </option>
                    <option className="filter-option" value="recrutement">
                        Recrutements
                    </option>
                    <option className="filter-option" value="management">
                        Management
                    </option>
                    <option className="filter-option" value="relationship">
                        Relationship
                    </option>
                </select>
            </div>
            <textarea
                onChange={(e) => setObjectives(e.target.value)}
                className="objective-detail"
                placeholder="Contenu d'Objectif"
                name="objectives"
                id="objectives"
                cols="170"
                rows="10"
            ></textarea>
            <Calender template="month" objective={true} />
            <h2 className="pink text-center">Envoyer à</h2>
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
            <div className="flex-column align-center">
                <h2 className="pink">Canal de diffusion</h2>
                <div className="canals">
                    <input type="checkbox" name="mail" id="mail" />
                    <label htmlFor="mail">Mails</label>
                    <input type="checkbox" name="sms" id="sms" />
                    <label htmlFor="sms">SMS</label>
                    <input type="checkbox" name="linked-in" id="linked-in" />
                    <label htmlFor="linked-in">LinkedIn</label>
                </div>
            </div>

            <span
                className="pink-button send-button"
                onClick={() => console.log(objectives)}
            >
                Envoyer
            </span>
        </div>
    )
}
