import React from "react"
import logo from "../assets/img/logo.png"
import "../assets/css/Entreprise.css"
import BlueBanner from "./BlueBanner"
export default function Entreprise() {
    const missions = ["SIRH", "Recrutement", "Human centric"]
    return (
        <React.Fragment>
            <BlueBanner />
            <div className="entreprise-page">
                <div className="entreprise-title flex-row">
                    <div className="logo-div">
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="flex-col">
                        <h1 className="title flex-row">Peak People</h1>
                        <div className="missions">
                            {missions.map((mission) => (
                                <span className="mission">{mission}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
